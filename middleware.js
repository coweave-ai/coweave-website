import { next } from '@vercel/edge';

// Vercel Edge Middleware — shared-token gate for the private /preview/* site.
//
// Flow:
//   1. Request matches /preview/:path* (see config.matcher).
//   2. If the caller already has the preview_auth cookie set to the current
//      PREVIEW_TOKEN value, let the request through untouched.
//   3. Otherwise, check ?access=<token> on the URL. If it matches
//      PREVIEW_TOKEN, set the cookie (30 day expiry), strip the query
//      param, and 307 back to the same URL so the visitor lands on a
//      clean address.
//   4. No cookie and no valid token → 307 redirect to / (the public
//      landing page). From the user's perspective, /preview doesn't
//      exist unless they have a token.
//
// To rotate access: change PREVIEW_TOKEN in the Vercel dashboard and
// redeploy. All outstanding share links (and all existing cookies) are
// invalidated instantly.
//
// To share: send prospects https://coweave.ai/preview?access=<TOKEN>
//
// The matcher is scoped to /preview/* so public routes (landing page,
// /privacy, /terms, /security, /robots.txt, assets) are completely
// unaffected and do not incur middleware cost.

export const config = {
  matcher: '/preview/:path*',
};

const COOKIE_NAME = 'preview_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

export default function middleware(request) {
  const url = new URL(request.url);
  const expected = process.env.PREVIEW_TOKEN;

  // Fail-safe: if the server has no token configured, don't leak the
  // preview. Redirect everyone to the public landing page. This also
  // prevents local preview builds (without env var set) from exposing
  // anything by accident.
  if (!expected) {
    return Response.redirect(new URL('/', request.url), 307);
  }

  // Already authenticated via cookie — let the request through.
  const cookieHeader = request.headers.get('cookie') || '';
  const hasValidCookie = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .some((c) => c === `${COOKIE_NAME}=${expected}`);

  if (hasValidCookie) {
    return next();
  }

  // First visit with valid token in the query string → set cookie and
  // redirect to the same path without the ?access= query param.
  const providedToken = url.searchParams.get('access');
  if (providedToken && providedToken === expected) {
    url.searchParams.delete('access');
    const response = Response.redirect(url.toString(), 307);
    response.headers.set(
      'Set-Cookie',
      `${COOKIE_NAME}=${expected}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`
    );
    return response;
  }

  // No cookie, no valid token → bounce to the public landing page.
  return Response.redirect(new URL('/', request.url), 307);
}

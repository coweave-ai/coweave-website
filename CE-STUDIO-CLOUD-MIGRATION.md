# CE Studio Cloud — Re-enabling Guide

This document tracks how to re-enable the CE Studio Cloud product page and two-product website when the standalone CE Studio Cloud SaaS is ready for public release.

## Snapshot Branch

The full two-product website (with CE Studio Cloud page, separate pricing, Products dropdown, etc.) is preserved on:

```
Branch: complete-website-with-pricing-20260408
```

This branch contains:
- `/cloud` route → CloudPage with full CE Studio Cloud product page
- Separate "Context Engineering Studio" and "CoWeave AI Platform" in nav dropdown
- Two-product pricing page with CE Studio tiers (Free/$29/$99) and Platform tiers ($299/$799)
- All blog posts referencing CE Studio Cloud as a standalone product

## What Was Changed (2026-04-08 consolidation)

### Routes
- `/cloud` → redirects to `/platform`
- `/pricing` → redirects to `/features`

### Files modified
| File | Change |
|------|--------|
| `src/App.jsx` | Removed CloudPage route, added FeaturesPage, added redirects |
| `src/components/Navigation/Navigation.jsx` | Removed Products dropdown, flat nav: Platform \| Features \| About \| Blog |
| `src/components/Footer/Footer.jsx` | Removed CE Studio link, renamed Pricing→Features |
| `src/components/Products/ProductsSection.jsx` | Single product card instead of two-product comparison |
| `src/pages/EnterprisePage.jsx` | Added CE Studio screenshots + context architecture, removed "Start with CE Studio" upsell |
| `src/pages/FeaturesPage.jsx` | NEW — unified feature grid + tier cards (no prices) |
| `src/pages/ContactPage.jsx` | Updated CE Studio references |
| `src/pages/BlogPostPage.jsx` | Changed /cloud link to /platform |
| 15 blog MDX files | Changed /cloud → /platform, reframed "CE Studio Cloud" as "CoWeave AI Platform" |

### Files kept but unrouted
| File | Status |
|------|--------|
| `src/pages/CloudPage.jsx` | Intact, not imported in App.jsx — can be re-added |
| `src/pages/PricingPage.jsx` | Intact, not imported in App.jsx — can be re-added at `/pricing` |

## How to Re-enable

### Option A: Cherry-pick from snapshot branch
```bash
git diff complete-website-with-pricing-20260408..main -- src/pages/CloudPage.jsx
git diff complete-website-with-pricing-20260408..main -- src/pages/PricingPage.jsx
```

### Option B: Manual re-enable steps

1. **Routing** (`src/App.jsx`):
   - Re-import `CloudPage` and `PricingPage`
   - Add routes: `/cloud` → `CloudPage`, `/pricing` → `PricingPage`
   - Remove the redirect routes for `/cloud` and `/pricing`

2. **Navigation** (`src/components/Navigation/Navigation.jsx`):
   - Re-add `productLinks` array with CE Studio and Platform
   - Re-add Products dropdown with `isProductsOpen` state
   - Change `navLinks` to include `Pricing` instead of `Features`

3. **Footer** (`src/components/Footer/Footer.jsx`):
   - Re-add "Context Engineering Studio" → `/cloud` link
   - Re-add "Pricing" → `/pricing` link

4. **Products Section** (`src/components/Products/ProductsSection.jsx`):
   - Restore two-product comparison (CE Studio vs Platform)

5. **Enterprise Page** (`src/pages/EnterprisePage.jsx`):
   - Re-add "Start with CE Studio" upsell section

6. **Blog MDX files**:
   - Change `/platform` links back to `/cloud` where appropriate
   - Restore "CE Studio Cloud" standalone product language

7. **URLs config** (`src/config/urls.js`):
   - Re-add `signup` and `signupWithPlan` URLs if signup flow is ready

8. **Pricing Page** (`src/pages/PricingPage.jsx`):
   - Re-add dollar amounts if pricing is finalized
   - Re-add billing toggle
   - Re-add `isYearly` state

## Reference: Original pricing structure

### CE Studio Cloud
| Tier | Monthly | Users | Teams | Contexts |
|------|---------|-------|-------|----------|
| Free | $0 | 3 | 1 | 10 |
| Starter | $29 | 15 | 3 | 100 |
| Professional | $99 | 60 | 10 | 500 |
| Enterprise | Custom | Unlimited | Unlimited | Unlimited |

### CoWeave AI Platform
| Tier | Monthly | Users | Teams | Contexts |
|------|---------|-------|-------|----------|
| Starter | $299 + BYOL | 15 | 3 | 100 |
| Professional | $799 + BYOL | 60 | 10 | 500 |
| Enterprise | Custom + BYOL | Unlimited | Unlimited | Unlimited |

Yearly billing: 17% discount (2 months free)

# CoWeave Landing Page - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS (Important!)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{role}}`
   - `{{message}}`
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID
5. Update the `.env` file with your credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📦 Deploying to GitHub Pages

### Option 1: Automatic Deployment

1. Make sure you have a GitHub repository set up
2. Update `vite.config.js` if your repo name is different:

```javascript
base: '/your-repo-name/',  // Change this to match your repo name
```

3. Run the deploy command:

```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

### Option 2: Manual Deployment

1. Build the site:
```bash
npm run build
```

2. Push the `dist` folder to GitHub Pages manually or use GitHub Actions.

## 🎨 Customization

### Update Content

All content is in the component files:
- **Hero**: `src/components/Hero/Hero.jsx`
- **Problem**: `src/components/Problem/ProblemSection.jsx`
- **Solution**: `src/components/Solution/SolutionSection.jsx`
- **Impact**: `src/components/Impact/ImpactSection.jsx`
- **Waitlist**: `src/components/Waitlist/WaitlistForm.jsx`

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    navy: '#1a1f3a',    // Change these
    blue: '#2a3f5f',
    cyan: '#00d4ff',
  },
  accent: {
    purple: '#9d4edd',
    pink: '#f72585',
  },
}
```

### Update Logo

Replace `/public/assets/coweave-logo-no-bg.png` with your own logo.

## 🐛 Troubleshooting

### Particles not showing?

Make sure all tsParticles dependencies are installed:
```bash
npm install tsparticles @tsparticles/react @tsparticles/engine @tsparticles/slim
```

### Form not submitting?

1. Check that your EmailJS credentials are correct in `.env`
2. Make sure `.env` is not in `.gitignore` for production (or use environment variables in your hosting platform)
3. Check the browser console for errors

### Build errors?

Try clearing node_modules and reinstalling:
```bash
rm -rf node_modules
npm install
npm run build
```

## 📊 Performance Tips

The initial bundle is ~518KB (158KB gzipped). To optimize:

1. **Code Splitting**: Use dynamic imports for sections
2. **Image Optimization**: Use WebP format for images
3. **Reduce Particle Count**: Lower the particle count on mobile devices

## 🎯 Features Checklist

- ✅ Particle background with mouse interaction
- ✅ Smooth scroll animations
- ✅ Glassmorphism design
- ✅ Animated stat counters
- ✅ Form validation with Zod
- ✅ Email integration with EmailJS
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ SEO optimized (meta tags, Open Graph)

## 📞 Support

For issues or questions:
1. Check the documentation files in this repo
2. Review the component files for implementation details
3. Check the EmailJS documentation for email setup

## 🚀 Going Live

Before deploying to production:

1. ✅ Update EmailJS credentials in `.env`
2. ✅ Test the form submission
3. ✅ Update social media links in Footer
4. ✅ Add Google Analytics (optional)
5. ✅ Test on multiple devices and browsers
6. ✅ Run Lighthouse audit for performance/SEO
7. ✅ Deploy to GitHub Pages

## 🎉 You're Done!

Your CoWeave landing page is ready to capture early adopters. Good luck with the launch! 🚀

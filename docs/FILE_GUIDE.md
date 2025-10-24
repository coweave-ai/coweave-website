# CoWeave Landing - File Implementation Guide

## 📁 Detailed File Breakdown

### Configuration Files

#### `package.json`
```json
{
  "name": "coweave-landing",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "tsparticles": "^3.0.0",
    "@tsparticles/react": "^3.0.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "@emailjs/browser": "^3.11.0",
    "react-icons": "^4.12.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1a1f3a',
          blue: '#2a3f5f',
          cyan: '#00d4ff',
        },
        accent: {
          purple: '#9d4edd',
          pink: '#f72585',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.5)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📂 Component Files

### Common Components

#### `src/components/common/GlowButton.jsx`
**Purpose:** Reusable button with glow effect
**Props:**
- `children` - Button text
- `onClick` - Click handler
- `variant` - 'primary' | 'secondary'
- `className` - Additional classes

**Features:**
- Gradient border glow
- Hover scale animation
- Click ripple effect
- Loading state

---

#### `src/components/common/GlassCard.jsx`
**Purpose:** Glassmorphism card container
**Props:**
- `children` - Card content
- `className` - Additional classes
- `hoverable` - Enable hover glow

**Features:**
- Frosted glass effect
- Blur backdrop
- Border glow on hover
- Smooth transitions

---

#### `src/components/common/AnimatedSection.jsx`
**Purpose:** Section wrapper with scroll animations
**Props:**
- `children` - Section content
- `animation` - 'fade' | 'slide' | 'scale'
- `delay` - Animation delay
- `className` - Additional classes

**Features:**
- Intersection Observer
- Framer Motion animations
- Configurable thresholds
- Stagger children

---

### Hero Components

#### `src/components/Hero/ParticleBackground.jsx`
**Purpose:** Animated particle network background
**Props:**
- None (self-contained)

**Features:**
- tsParticles integration
- Cyan/white particles
- Mouse interaction
- Responsive particle count
- Performance optimized

**Config:**
```javascript
{
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ['#00d4ff', '#ffffff'] },
    links: { 
      enable: true, 
      distance: 150, 
      color: '#00d4ff',
      opacity: 0.4 
    },
    move: { enable: true, speed: 2 },
    size: { value: 3 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  }
}
```

---

#### `src/components/Hero/Hero.jsx`
**Purpose:** Main hero section
**State:**
- None

**Features:**
- Full viewport height
- Centered content
- Logo with glow
- Animated headline
- CTA button
- Scroll indicator

**Animations:**
- Logo: scale + glow on mount
- Text: fade + slide up
- Button: delay entrance
- Background: gradient animation

---

### Problem Components

#### `src/components/Problem/ProblemSection.jsx`
**Purpose:** Problem statement container
**State:**
- None

**Features:**
- Section heading
- 3-column grid (1 on mobile)
- Stagger animation
- Dark background

---

#### `src/components/Problem/ProblemCard.jsx`
**Purpose:** Individual problem card
**Props:**
- `icon` - React Icon component
- `title` - Card title
- `description` - Card description

**Features:**
- Glassmorphism styling
- Icon with colored background
- Hover glow effect
- Scale on hover

---

### Solution Components

#### `src/components/Solution/SolutionSection.jsx`
**Purpose:** Solution highlights container
**State:**
- None

**Features:**
- "Something Big" headline
- 3-column grid
- Scroll animation
- Gradient background

---

#### `src/components/Solution/FeatureCard.jsx`
**Purpose:** Individual feature card
**Props:**
- `number` - Feature number (1, 2, 3)
- `title` - Feature title
- `description` - Feature description

**Features:**
- Large number badge
- Gradient border
- Hover flip (optional)
- Glow effect

---

### Impact Components

#### `src/components/Impact/ImpactSection.jsx`
**Purpose:** Results/metrics container
**State:**
- None

**Features:**
- "Real Results" headline
- 4-card grid (2x2)
- Counter animations
- Dark theme

---

#### `src/components/Impact/StatCard.jsx`
**Purpose:** Animated statistic card
**Props:**
- `value` - Number to count to
- `suffix` - '%' | '+' | 'x'
- `label` - Metric description
- `icon` - React Icon

**State:**
- `count` - Current counter value

**Features:**
- Animated counting effect
- Large number display
- Icon badge
- Glow on hover

**Animation Logic:**
```javascript
useEffect(() => {
  const duration = 2000;
  const steps = 60;
  const increment = value / steps;
  const stepTime = duration / steps;
  
  const timer = setInterval(() => {
    setCount(prev => {
      if (prev >= value) {
        clearInterval(timer);
        return value;
      }
      return prev + increment;
    });
  }, stepTime);
}, [value]);
```

---

### Waitlist Components

#### `src/components/Waitlist/WaitlistSection.jsx`
**Purpose:** Waitlist CTA container
**State:**
- None

**Features:**
- Compelling headline
- CTA copy
- Form container with glow
- Privacy note

---

#### `src/components/Waitlist/WaitlistForm.jsx`
**Purpose:** Email capture form
**State:**
- `isSubmitting` - Loading state
- `isSubmitted` - Success state
- `error` - Error message

**Props:**
- None

**Features:**
- React Hook Form
- Zod validation
- EmailJS integration
- Success/error states
- Loading animation

**Validation Schema:**
```javascript
const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  role: z.string().min(1, 'Please select a role')
});
```

**Fields:**
- Name (text, required)
- Email (email, required)
- Company (text, optional)
- Role (select, required)
  - VP Engineering
  - Director DevOps
  - Senior Engineer
  - Team Lead
  - Other

---

### Footer Component

#### `src/components/Footer/Footer.jsx`
**Purpose:** Site footer
**State:**
- None

**Features:**
- Small logo
- Anthropic badge
- Contact email
- Copyright
- Social links (TBD)

---

## 🎣 Custom Hooks

### `src/hooks/useScrollAnimation.js`
**Purpose:** Trigger animations on scroll
**Returns:**
- `ref` - Element ref
- `isVisible` - Boolean visibility state

**Usage:**
```javascript
const { ref, isVisible } = useScrollAnimation();

<div ref={ref} className={isVisible ? 'animate' : ''}>
  Content
</div>
```

---

### `src/hooks/useParallax.js`
**Purpose:** Parallax scroll effect
**Returns:**
- `offset` - Y offset value

**Usage:**
```javascript
const offset = useParallax();

<div style={{ transform: `translateY(${offset}px)` }}>
  Parallax content
</div>
```

---

## 🎨 Styles

### `src/styles/globals.css`
**Purpose:** Global styles and resets
**Contains:**
- CSS reset
- Font imports
- Root variables
- Smooth scroll
- Selection colors

---

### `src/styles/animations.css`
**Purpose:** Keyframe animations
**Contains:**
- Glow pulse
- Float
- Slide up
- Fade in
- Scale in

---

### `src/styles/variables.css`
**Purpose:** CSS custom properties
**Contains:**
- Color variables
- Spacing variables
- Shadow variables
- Transition timings

---

## 🛠️ Utilities

### `src/utils/emailService.js`
**Purpose:** EmailJS integration
**Functions:**
- `sendWaitlistEmail(data)` - Send form data
- `initEmailJS()` - Initialize service

**Setup:**
```javascript
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendWaitlistEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_TEMPLATE_ID,
      formData
    );
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
};
```

---

### `src/utils/analytics.js`
**Purpose:** Analytics tracking
**Functions:**
- `trackPageView()` - Track page view
- `trackWaitlistSubmit(data)` - Track signup
- `trackButtonClick(label)` - Track clicks

---

## 📱 Main App Files

### `src/App.jsx`
**Purpose:** Main app component
**State:**
- None

**Structure:**
```jsx
<div className="app">
  <Hero />
  <ProblemSection />
  <SolutionSection />
  <ImpactSection />
  <WaitlistSection />
  <Footer />
</div>
```

**Features:**
- Smooth scroll
- Section IDs for navigation
- Global context (if needed)

---

### `src/main.jsx`
**Purpose:** React entry point
**Features:**
- React 18 root render
- Strict mode
- Global styles import

---

## 🔧 Build Configuration

### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

---

## 📋 File Priorities

### Must Build First (Critical Path)
1. Tailwind config
2. Global styles
3. Common components (Button, Card, AnimatedSection)
4. Hero section (most visible)
5. Waitlist form (conversion goal)

### Build Second
6. Problem section
7. Solution section
8. Impact section

### Build Last
9. Footer
10. Polish & optimization
11. Testing & deployment

---

## 🎯 Next Steps

**Ready to build?** 

Start with:
1. ✅ Initialize Vite project
2. ✅ Install dependencies
3. ✅ Configure Tailwind
4. 🚀 Build Hero section

Would you like me to start building the actual code now? 🎨

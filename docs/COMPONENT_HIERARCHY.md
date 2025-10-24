# CoWeave Landing - Component Hierarchy

## 🌳 Component Tree

```
App.jsx
│
├── Hero/
│   ├── ParticleBackground.jsx (animated bg)
│   ├── Logo (with glow)
│   ├── Headline (gradient text)
│   ├── Subtitle
│   └── GlowButton → "Join Waitlist"
│
├── ProblemSection/
│   ├── Section Header
│   └── Grid (3 columns)
│       ├── ProblemCard (Coordination Tax)
│       │   ├── Icon (🤝)
│       │   ├── Title
│       │   └── Description
│       ├── ProblemCard (Knowledge Silos)
│       │   ├── Icon (🧠)
│       │   ├── Title
│       │   └── Description
│       └── ProblemCard (LLM Context Tax)
│           ├── Icon (📋)
│           ├── Title
│           └── Description
│
├── SolutionSection/
│   ├── Section Header
│   │   ├── "Something Big Is Coming"
│   │   └── Subheadline
│   └── Grid (3 columns)
│       ├── FeatureCard #1 (Codify Practices)
│       │   ├── Number Badge
│       │   ├── Title
│       │   └── Description
│       ├── FeatureCard #2 (Human-in-Loop)
│       │   ├── Number Badge
│       │   ├── Title
│       │   └── Description
│       └── FeatureCard #3 (Seamless Integration)
│           ├── Number Badge
│           ├── Title
│           └── Description
│
├── ImpactSection/
│   ├── Section Header ("Real Results")
│   └── Grid (2x2)
│       ├── StatCard (MTTR)
│       │   ├── Animated Counter (40-60%)
│       │   ├── Icon
│       │   └── Label
│       ├── StatCard (Routine Tasks)
│       │   ├── Animated Counter (50-60%)
│       │   ├── Icon
│       │   └── Label
│       ├── StatCard (Availability)
│       │   ├── Animated Counter (99.9%+)
│       │   ├── Icon
│       │   └── Label
│       └── StatCard (Incidents)
│           ├── Animated Counter (60-80%)
│           ├── Icon
│           └── Label
│
├── WaitlistSection/
│   ├── Section Header
│   │   ├── "Be Among the First"
│   │   └── CTA Copy
│   ├── WaitlistForm
│   │   ├── Name Field
│   │   ├── Email Field
│   │   ├── Company Field
│   │   ├── Role Dropdown
│   │   ├── GlowButton → "Reserve Your Spot"
│   │   ├── Loading State
│   │   ├── Success State
│   │   └── Error State
│   └── Privacy Note
│
└── Footer/
    ├── Small Logo
    ├── "Powered by Anthropic Claude"
    ├── Contact Email
    ├── Copyright
    └── Social Links (placeholder)
```

---

## 🧩 Reusable Components

These components are used across multiple sections:

```
src/components/common/
│
├── GlowButton.jsx
│   Used in: Hero, Waitlist
│   Props: children, onClick, variant, loading
│
├── GlassCard.jsx
│   Used in: Problem, Solution, Impact
│   Props: children, hoverable, className
│
└── AnimatedSection.jsx
    Used in: All sections
    Props: children, animation, delay
```

---

## 🎣 Custom Hooks

```
src/hooks/
│
├── useScrollAnimation.js
│   Used in: All sections
│   Returns: { ref, isVisible }
│
└── useParallax.js
    Used in: Hero (ParticleBackground)
    Returns: offset (number)
```

---

## 🎨 Styling Architecture

```
src/styles/
│
├── globals.css
│   │   Base styles, resets
│   │   Font imports
│   │   Root variables
│   └── Applied to: <body>
│
├── animations.css
│   │   @keyframes definitions
│   │   Animation utilities
│   └── Applied to: Various components
│
└── variables.css
    │   CSS custom properties
    │   Color variables
    │   Spacing variables
    └── Applied to: :root
```

---

## 🔌 Data Flow

### Waitlist Form Submission
```
User Input
    ↓
WaitlistForm.jsx (React Hook Form)
    ↓
Validation (Zod schema)
    ↓
emailService.js (EmailJS)
    ↓
Email Sent
    ↓
Success/Error State
    ↓
User Feedback
```

### Scroll Animations
```
User Scrolls
    ↓
Intersection Observer (useScrollAnimation hook)
    ↓
Element enters viewport
    ↓
isVisible = true
    ↓
Framer Motion animation triggers
    ↓
Component animates in
```

### Stat Counter Animation
```
Component mounts
    ↓
useEffect triggers
    ↓
setInterval counts up
    ↓
Number increments (60 steps)
    ↓
Reaches target value
    ↓
clearInterval
```

---

## 📦 State Management

### Component-Level State

```javascript
// Hero - No state needed (static)

// ProblemSection - No state needed

// SolutionSection - No state needed

// StatCard - Local state for counter
const [count, setCount] = useState(0);

// WaitlistForm - Form state + submission state
const { register, handleSubmit, errors } = useForm();
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [error, setError] = useState(null);

// Footer - No state needed
```

### No Global State Needed
- No complex state to share
- Each component is self-contained
- Props passed directly from parent
- Form state isolated to WaitlistForm

---

## 🎬 Animation Timeline

### On Page Load
```
0ms    → Particle background starts
100ms  → Hero logo fades in + scales
300ms  → Hero headline slides up
500ms  → Hero subtitle slides up
700ms  → Hero button slides up
```

### On Scroll
```
Problem Section visible
    → Cards stagger in (100ms apart)

Solution Section visible
    → Feature cards stagger in (150ms apart)

Impact Section visible
    → Stat cards appear
    → Numbers start counting

Waitlist Section visible
    → Form fades in
    → Fields stagger in (50ms apart)
```

---

## 🎯 Component Responsibilities

### Presentational Components (No Logic)
- ProblemCard - Display problem info
- FeatureCard - Display feature info
- Footer - Display footer content
- GlassCard - Styling wrapper
- GlowButton - Styled button

### Container Components (With Logic)
- WaitlistForm - Form handling + validation
- StatCard - Counter animation
- ParticleBackground - Particle config
- Hero - CTA navigation
- AnimatedSection - Scroll detection

---

## 🔄 Component Lifecycle

### Mount → Animate → Idle → Unmount

```
Hero Component:
├── Mount
│   ├── ParticleBackground renders
│   ├── Logo animates in
│   └── Text animates in
├── Idle (user views)
└── Remains mounted (never unmounts)

StatCard Component:
├── Mount (when scrolled into view)
├── Counter animation starts
│   ├── useEffect creates interval
│   ├── Count increments
│   └── Reaches target → clear interval
├── Idle (displaying final number)
└── Remains mounted

WaitlistForm Component:
├── Mount (when scrolled into view)
├── Idle (waiting for input)
├── User types → validation
├── User submits
│   ├── Set isSubmitting = true
│   ├── Call emailService
│   ├── Success → Set isSubmitted = true
│   └── Error → Set error message
└── Display result
```

---

## 🎨 Visual Hierarchy

### Z-Index Layers
```
10  → ParticleBackground (behind everything)
20  → Section backgrounds
30  → Content (cards, text)
40  → Buttons (on hover)
50  → Form elements (focused)
100 → Modals (if added later)
```

### Layout Structure
```
<App>
  └── <div className="min-h-screen">
      ├── <Hero className="h-screen" />           ← Full viewport
      ├── <ProblemSection className="py-32" />    ← Spacious padding
      ├── <SolutionSection className="py-32" />   ← Spacious padding
      ├── <ImpactSection className="py-32" />     ← Spacious padding
      ├── <WaitlistSection className="py-40" />   ← Extra padding
      └── <Footer className="py-12" />            ← Compact
```

---

## 📊 Component Metrics

### Complexity Rating (1-5)

| Component | Complexity | Lines of Code | Dependencies |
|-----------|-----------|---------------|--------------|
| Hero | 3/5 | ~150 | framer-motion, tsparticles |
| ParticleBackground | 4/5 | ~100 | tsparticles |
| ProblemSection | 2/5 | ~80 | framer-motion |
| SolutionSection | 2/5 | ~80 | framer-motion |
| ImpactSection | 3/5 | ~100 | framer-motion |
| StatCard | 3/5 | ~80 | react hooks |
| WaitlistForm | 5/5 | ~200 | react-hook-form, zod, emailjs |
| Footer | 1/5 | ~40 | none |
| GlowButton | 2/5 | ~50 | framer-motion |
| GlassCard | 2/5 | ~40 | framer-motion |
| AnimatedSection | 3/5 | ~60 | framer-motion, intersection-observer |

**Total Lines of Code: ~1,200-1,500**

---

## 🚀 Build Order (Recommended)

### Phase 1: Foundation
1. Setup Vite + dependencies
2. Configure Tailwind
3. Create global styles
4. Build common components

### Phase 2: Core Sections
5. Hero (most important visual)
6. WaitlistForm (conversion goal)

### Phase 3: Content Sections
7. Problem
8. Solution
9. Impact

### Phase 4: Final Touches
10. Footer
11. Animations polish
12. Responsive refinement

---

**This structure ensures:**
- ✅ Clear component boundaries
- ✅ Easy to maintain
- ✅ Reusable components
- ✅ Performance optimized
- ✅ Scalable architecture

Ready to start building? Let's code! 💻✨

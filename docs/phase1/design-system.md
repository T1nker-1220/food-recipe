# Design System Documentation - Phase 1.2

## Overview

This document outlines the implemented design system for our recipe website, covering typography, colors, spacing, animations, and theming. The design system follows atomic design principles and ensures consistency across all components.

## 1. Typography System

### Font Families

```css
--font-primary: 'Inter var' /* Main text, UI elements */ --font-secondary: 'Playfair Display'
  /* Headings, featured text */ --font-mono: 'JetBrains Mono' /* Code, technical content */;
```

### Type Scale

```typescript
// Desktop Scale (Modular Scale: 1.25)
h1: '3.815rem'; // 61.04px
h2: '3.052rem'; // 48.83px
h3: '2.441rem'; // 39.06px
h4: '1.953rem'; // 31.25px
h5: '1.563rem'; // 25.00px
base: '1.25rem'; // 20.00px
sm: '1rem'; // 16.00px
xs: '0.8rem'; // 12.80px
```

### Font Weights

```css
--font-thin: 100 --font-light: 300 --font-normal: 400 --font-medium: 500 --font-semibold: 600
  --font-bold: 700 --font-black: 900;
```

### Line Heights & Letter Spacing

```css
/* Line Heights */
--leading-tight: 1.1 --leading-normal: 1.5 --leading-relaxed: 1.75 /* Letter Spacing */
  --tracking-tight: -0.02em --tracking-normal: 0 --tracking-wide: 0.05em;
```

## 2. Color System

### Primary Colors (Blue)

```css
--primary-50: #f0f9ff /* Lightest blue */ --primary-100: #e0f2fe /* Very light blue */
  --primary-200: #bae6fd /* Light blue */ --primary-300: #7dd3fc /* Blue */ --primary-400: #38bdf8
  /* Medium blue */ --primary-500: #0ea5e9 /* Primary blue */ --primary-600: #0284c7 /* Dark blue */
  --primary-700: #0369a1 /* Darker blue */ --primary-800: #075985 /* Very dark blue */
  --primary-900: #0c4a6e /* Darkest blue */ --primary-950: #082f49 /* Deep blue */;
```

### Secondary Colors (Purple)

```css
--secondary-50: #fdf4ff /* Lightest purple */ --secondary-100: #fae8ff /* Very light purple */
  --secondary-200: #f5d0fe /* Light purple */ --secondary-300: #f0abfc /* Purple */
  --secondary-400: #e879f9 /* Medium purple */ --secondary-500: #d946ef /* Primary purple */
  --secondary-600: #c026d3 /* Dark purple */ --secondary-700: #a21caf /* Darker purple */
  --secondary-800: #86198f /* Very dark purple */ --secondary-900: #701a75 /* Darkest purple */
  --secondary-950: #4a044e /* Deep purple */;
```

### Accent Colors (Orange)

```css
--accent-50: #fff7ed /* Lightest orange */ --accent-100: #ffedd5 /* Very light orange */
  --accent-200: #fed7aa /* Light orange */ --accent-300: #fdba74 /* Orange */ --accent-400: #fb923c
  /* Medium orange */ --accent-500: #f97316 /* Primary orange */ --accent-600: #ea580c
  /* Dark orange */ --accent-700: #c2410c /* Darker orange */ --accent-800: #9a3412
  /* Very dark orange */ --accent-900: #7c2d12 /* Darkest orange */ --accent-950: #431407
  /* Deep orange */;
```

### Semantic Colors

```css
/* Success, Warning, Error, Info variants */
--success-{shade}: #...  /* Green variants */
--warning-{shade}: #...  /* Yellow variants */
--error-{shade}: #...    /* Red variants */
--info-{shade}: #...     /* Cyan variants */
```

## 3. Spacing System

### Base Scale

```css
--spacing-px: 1px --spacing-0: 0 --spacing-0.5: 0.125rem /* 2px */ --spacing-1: 0.25rem /* 4px */
  --spacing-1.5: 0.375rem /* 6px */ --spacing-2: 0.5rem /* 8px */ /* ... continues up to */
  --spacing-96: 24rem /* 384px */;
```

### Layout Primitives

```css
/* Container Sizes */
--container-sm: 640px --container-md: 768px --container-lg: 1024px --container-xl: 1280px
  --container-2xl: 1536px /* Grid System */ --grid-columns-mobile: 4 --grid-columns-tablet: 8
  --grid-columns-desktop: 12 /* Spacing */ --gutter-mobile: 1rem /* 16px */ --gutter-tablet: 1.5rem
  /* 24px */ --gutter-desktop: 2rem /* 32px */;
```

## 4. Animation System

### Durations

```css
--duration-instant: 0ms --duration-fastest: 100ms --duration-fast: 200ms --duration-normal: 300ms
  --duration-slow: 400ms --duration-slowest: 500ms;
```

### Easing Functions

```css
--ease-linear: linear --ease-in: cubic-bezier(0.4, 0, 1, 1) --ease-out: cubic-bezier(0, 0, 0.2, 1)
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
  --ease-smooth: cubic-bezier(0.45, 0, 0.55, 1);
```

### Keyframe Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
```

## 5. Theme System

### Light Theme

```css
.light {
  /* Base */
  --background: var(--neutral-50) --foreground: var(--neutral-950) /* Components */
    --card-bg: var(--neutral-50) --card-border: var(--neutral-200) --input-bg: var(--neutral-50)
    --input-border: var(--neutral-200) /* Interactive */ --primary-button-bg: var(--primary-600)
    --primary-button-text: var(--neutral-50) --primary-button-hover: var(--primary-700);
}
```

### Dark Theme

```css
.dark {
  /* Base */
  --background: var(--neutral-950) --foreground: var(--neutral-50) /* Components */
    --card-bg: var(--neutral-900) --card-border: var(--neutral-800) --input-bg: var(--neutral-900)
    --input-border: var(--neutral-700) /* Interactive */ --primary-button-bg: var(--primary-400)
    --primary-button-text: var(--neutral-950) --primary-button-hover: var(--primary-300);
}
```

## Usage Examples

### Typography

```tsx
// Heading Example
<h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
  Recipe Title
</h1>

// Body Text Example
<p className="text-base leading-relaxed">
  Recipe description text
</p>
```

### Colors & Theme

```tsx
// Button Example
<button className="bg-primary-600 text-neutral-50 hover:bg-primary-700 dark:bg-primary-400 dark:text-neutral-950 dark:hover:bg-primary-300">
  Create Recipe
</button>

// Card Example
<div className="bg-card border-border rounded-lg p-4">
  Card content
</div>
```

### Spacing & Layout

```tsx
// Container Example
<div className="container-custom">
  Content with responsive padding
</div>

// Grid Example
<div className="grid-mobile md:grid-tablet lg:grid-desktop">
  Grid content
</div>
```

### Animations

```tsx
// Transition Example
<div className="transition-base hover:scale-105">
  Hover to scale
</div>

// Loading State Example
<div className="loading-spin">
  Loading spinner
</div>
```

## Implementation Details

### Configuration Files

- `src/lib/config/design-system.ts`: Typography configuration
- `src/lib/config/colors.ts`: Color system
- `src/lib/config/spacing.ts`: Spacing and layout
- `src/lib/config/animations.ts`: Animation system
- `src/lib/config/theme.ts`: Theme configuration

### Integration

- Tailwind CSS configuration
- CSS custom properties
- Theme provider setup
- Responsive utilities
- Component-specific theming

### Accessibility

- WCAG 2.1 compliant color contrast
- Reduced motion preferences
- Focus visible states
- Screen reader support

## Next Steps

1. Implement shadcn component library (Phase 1.3)
2. Create base atomic components
3. Develop molecular components
4. Set up responsive layouts
5. Implement mobile-first patterns

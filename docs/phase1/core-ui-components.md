# Phase 1.3: Core UI Components Documentation

## Overview

This phase implements the core UI components following our design system's principles, mobile-first approach, and atomic design methodology. All components are built on top of shadcn with custom extensions to match our specific needs.

## 1. Component Architecture

### 1.1 Directory Structure

```
src/
├── components/
│   └── ui/
│       ├── atoms/        # Base components from shadcn
│       │   ├── button.tsx
│       │   ├── input.tsx
│       │   ├── card.tsx
│       │   └── form.tsx
│       ├── molecules/    # Composite components
│       │   ├── card.tsx
│       │   ├── form.tsx
│       │   └── navigation.tsx
│       └── layout/       # Layout components
│           ├── container.tsx
│           ├── grid.tsx
│           ├── stack.tsx
│           └── section.tsx
```

### 1.2 Mobile-First Patterns

```typescript
// Configuration in mobile-patterns.ts
interface MobilePatterns {
  layout: {
    safeArea: {
      top: boolean;
      bottom: boolean;
      left: boolean;
      right: boolean;
    };
    viewport: {
      height: '100vh';
      adjustForKeyboard: boolean;
      preventOverscroll: boolean;
    };
    grid: {
      columns: {
        xs: 4;    // < 640px
        sm: 6;    // >= 640px
        md: 8;    // >= 768px
        lg: 12;   // >= 1024px
      };
    };
  };
}
```

## 2. Implemented Components

### 2.1 Molecular Components

#### Card Component

```typescript
interface CardProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'compact' | 'interactive' | 'horizontal';
  className?: string;
  children?: React.ReactNode;
}

// Features:
// - Mobile-first responsive design
// - Multiple variants for different use cases
// - Interactive states with animations
// - Accessible keyboard navigation
```

#### Form Component

```typescript
interface FormProps<T extends z.ZodType> {
  schema: T;
  defaultValues?: Partial<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => void;
  variant?: 'stacked' | 'inline' | 'compact';
  className?: string;
  children: (form: ReturnType<typeof useForm<z.infer<T>>>) => React.ReactNode;
}

// Features:
// - Type-safe form handling with Zod
// - Multiple layout variants
// - Built-in validation
// - Responsive design patterns
```

#### Navigation Component

```typescript
interface NavigationProps {
  items: NavigationItem[];
  variant?: 'desktop' | 'mobile' | 'sidebar';
  className?: string;
}

// Features:
// - Responsive navigation patterns
// - Mobile-first bottom sheet
// - Keyboard accessible
// - Active state handling
```

### 2.2 Layout Components

#### Container Component

```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

// Features:
// - Responsive max-widths
// - Mobile-first padding
// - Consistent spacing system
```

#### Grid Component

```typescript
interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

// Features:
// - Mobile-first grid system
// - Responsive column layouts
// - Configurable gap sizes
```

#### Stack Component

```typescript
interface StackProps {
  direction?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
}

// Features:
// - Flexible layout control
// - Responsive spacing
// - Alignment utilities
```

## 3. Mobile-First Implementation

### 3.1 Responsive Hooks

```typescript
// Media Query Hook
export function useMediaQuery(breakpoint: Breakpoint, type: 'min' | 'max' = 'min');

// Convenience Hooks
export function useIsMobile(): boolean;
export function useIsTablet(): boolean;
export function useIsDesktop(): boolean;
```

### 3.2 Touch Interactions

```typescript
interface TouchConfig {
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down', distance: number) => void;
  onTap?: () => void;
  swipeThreshold?: number;
  preventScroll?: boolean;
}

// Features:
// - Gesture handling
// - Swipe detection
// - Touch position tracking
// - Scroll prevention options
```

## 4. Design System Integration

### 4.1 Typography Scale

```typescript
const typographyConfig = {
  fontFamily: {
    primary: ['Inter var', 'sans-serif'],
    secondary: ['Playfair Display', 'serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    // Mobile-first responsive scaling
    '3xl': ['3.815rem', { lineHeight: '1.1' }],
    '2xl': ['3.052rem', { lineHeight: '1.1' }],
    xl: ['2.441rem', { lineHeight: '1.1' }],
    // ... more sizes
  },
};
```

### 4.2 Spacing System

```typescript
const spacingSystem = {
  scale: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    // ... more spacing values
  },
  layout: {
    gutter: 'var(--spacing-4)',
    margin: 'var(--spacing-6)',
    section: 'var(--spacing-20)',
  },
};
```

## 5. Performance Considerations

### 5.1 Optimizations

```typescript
const performanceConfig = {
  lazyLoading: {
    images: true,
    components: true,
    threshold: 0.1,
  },
  animations: {
    reduceMotion: true,
    useTransformOnly: true,
    preferCompositing: true,
  },
  caching: {
    images: true,
    fonts: true,
    api: true,
  },
};
```

### 5.2 Accessibility Features

```typescript
const accessibilityConfig = {
  touch: {
    targetSize: '44px',
    spacing: '8px',
  },
  contrast: {
    enhanced: true,
    ratio: 4.5,
  },
  reduceMotion: true,
  screenReader: {
    announcements: true,
    navigation: true,
  },
};
```

## 6. Usage Examples

### 6.1 Card Component

```tsx
<Card
  variant="interactive"
  title="Recipe Title"
  description="Recipe description"
>
  <RecipeContent />
  <CardFooter>
    <Button>View Recipe</Button>
  </CardFooter>
</Card>
```

### 6.2 Form Component

```tsx
<Form
  schema={recipeSchema}
  variant="stacked"
  onSubmit={handleSubmit}
>
  {(form) => (
    <>
      <FormField
        name="title"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Recipe Title</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      {/* More form fields */}
    </>
  )}
</Form>
```

### 6.3 Layout Components

```tsx
<Container size="lg">
  <Stack direction="vertical" spacing="lg">
    <Grid cols={4} gap="md">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </Grid>
  </Stack>
</Container>
```

## 7. Next Steps

1. Implement remaining organism components
2. Add more interactive patterns
3. Enhance animation system
4. Expand accessibility features
5. Add more component variants

## 8. Related Documentation

- [Design System](./design-system.md)
- [Frontend Architecture](./frontend-architecture.md)
- [Mobile Patterns](./mobile-patterns.md)
- [Accessibility Guidelines](./accessibility.md)

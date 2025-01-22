import { cn } from '@/lib/utils';
import * as React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 4, gap = 'md', className, children, ...props }, ref) => {
    // Grid columns based on our design system's responsive patterns
    const colsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
      8: 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
      12: 'grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12',
    };

    // Gap sizes from our spacing system
    const gapClasses = {
      none: 'gap-0',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    };

    return (
      <div
        ref={ref}
        className={cn('grid w-full', colsClasses[cols], gapClasses[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export { Grid, type GridProps };

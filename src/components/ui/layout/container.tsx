import { cn } from '@/lib/utils';
import * as React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', className, children, ...props }, ref) => {
    // Container max-widths from our design system
    const sizeClasses = {
      sm: 'max-w-[640px]',
      md: 'max-w-[768px]',
      lg: 'max-w-[1024px]',
      xl: 'max-w-[1280px]',
      '2xl': 'max-w-[1536px]',
      full: 'max-w-none',
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'mx-auto w-full',
          // Responsive padding from design system
          'px-4 md:px-6 lg:px-8',
          // Max-width based on size prop
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container, type ContainerProps };

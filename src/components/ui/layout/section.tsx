import { cn } from '@/lib/utils';
import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    // Section padding based on our spacing system
    const sizeClasses = {
      sm: 'py-8 md:py-12',
      md: 'py-12 md:py-16',
      lg: 'py-16 md:py-24',
    };

    return (
      <section
        ref={ref}
        className={cn(
          // Base styles
          'w-full',
          // Responsive padding
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section, type SectionProps };

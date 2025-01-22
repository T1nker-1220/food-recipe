import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface CardProps extends React.ComponentPropsWithoutRef<typeof ShadcnCard> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'compact' | 'interactive' | 'horizontal';
  className?: string;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, footer, variant = 'default', className, children, ...props }, ref) => {
    // Variant-specific styles following our design system
    const variantStyles = {
      default: '',
      compact: 'p-4',
      interactive: 'transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer',
      horizontal: 'flex flex-row items-center md:items-start gap-4',
    };

    return (
      <ShadcnCard
        ref={ref}
        className={cn(
          // Base styles
          'overflow-hidden',
          // Mobile-first padding and border radius from design system
          'p-4 md:p-6',
          'rounded-lg md:rounded-xl',
          // Variant-specific styles
          variantStyles[variant],
          // Shadow from design system
          'shadow-sm transition-shadow duration-200 hover:shadow-md',
          className
        )}
        {...props}
      >
        {variant === 'horizontal' ? (
          <div className="flex flex-1 gap-4">
            {title && (
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold md:text-2xl">{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
              </CardHeader>
            )}
            <CardContent className="flex-1 p-0">{children}</CardContent>
            {footer && <CardFooter className="p-0">{footer}</CardFooter>}
          </div>
        ) : (
          <>
            {title && (
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-xl font-semibold md:text-2xl">{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
              </CardHeader>
            )}
            <CardContent className="mt-4 p-0">{children}</CardContent>
            {footer && <CardFooter className="mt-4 p-0">{footer}</CardFooter>}
          </>
        )}
      </ShadcnCard>
    );
  }
);

Card.displayName = 'Card';

export { Card, type CardProps };

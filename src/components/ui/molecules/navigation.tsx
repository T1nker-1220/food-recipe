import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavigationProps {
  items: NavigationItem[];
  variant?: 'desktop' | 'mobile' | 'sidebar';
  className?: string;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ items, variant = 'desktop', className, ...props }, ref) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    // Mobile navigation with bottom sheet
    if (variant === 'mobile') {
      return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <nav className="flex flex-col space-y-4" {...props}>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      );
    }

    // Sidebar navigation
    if (variant === 'sidebar') {
      return (
        <nav
          ref={ref}
          className={cn('flex h-screen w-[200px] flex-col space-y-2 border-r p-4', className)}
          {...props}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === item.href ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      );
    }

    // Desktop navigation (default)
    return (
      <nav ref={ref} className={cn('hidden items-center space-x-4 md:flex', className)} {...props}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation, type NavigationItem, type NavigationProps };

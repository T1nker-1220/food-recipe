import { useCallback, useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const breakpoints = {
  xs: 320, // Mobile S
  sm: 375, // Mobile M
  md: 425, // Mobile L
  lg: 768, // Tablet
  xl: 1024, // Laptop
  '2xl': 1440, // Desktop
  '3xl': 2560, // 4K
};

export function useMediaQuery(breakpoint: Breakpoint, type: 'min' | 'max' = 'min') {
  const getQuery = useCallback(() => {
    const width = breakpoints[breakpoint];
    return `(${type}-width: ${width}px)`;
  }, [breakpoint, type]);

  const [matches, setMatches] = useState(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      return window.matchMedia(getQuery()).matches;
    }
    // Default to true for mobile-first approach on server-side
    return type === 'min' ? false : true;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = window.matchMedia(getQuery());
    setMatches(query.matches);

    // Modern browsers
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    query.addEventListener('change', onChange);

    return () => query.removeEventListener('change', onChange);
  }, [getQuery]);

  return matches;
}

// Convenience hooks for common breakpoints
export function useIsMobile() {
  return useMediaQuery('lg', 'max');
}

export function useIsTablet() {
  const isMinLg = useMediaQuery('lg', 'min');
  const isMaxXl = useMediaQuery('xl', 'max');
  return isMinLg && isMaxXl;
}

export function useIsDesktop() {
  return useMediaQuery('xl', 'min');
}

// Hook for orientation
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(() => {
    if (typeof window !== 'undefined') {
      return window.screen.orientation.type.includes('portrait') ? 'portrait' : 'landscape';
    }
    return 'portrait'; // Default to portrait on server-side
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleChange = () => {
      setOrientation(
        window.screen.orientation.type.includes('portrait') ? 'portrait' : 'landscape'
      );
    };

    window.addEventListener('orientationchange', handleChange);
    return () => window.removeEventListener('orientationchange', handleChange);
  }, []);

  return orientation;
}

// Hook for safe area insets
export function useSafeArea() {
  const [insets, setInsets] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateInsets = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      setInsets({
        top: parseInt(computedStyle.getPropertyValue('--sat') || '0', 10),
        right: parseInt(computedStyle.getPropertyValue('--sar') || '0', 10),
        bottom: parseInt(computedStyle.getPropertyValue('--sab') || '0', 10),
        left: parseInt(computedStyle.getPropertyValue('--sal') || '0', 10),
      });
    };

    // Initial update
    updateInsets();

    // Update on resize
    window.addEventListener('resize', updateInsets);
    return () => window.removeEventListener('resize', updateInsets);
  }, []);

  return insets;
}

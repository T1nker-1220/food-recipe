import { type Config } from 'tailwindcss';

export const mobilePatterns = {
  layout: {
    safeArea: {
      top: true,
      bottom: true,
      left: true,
      right: true,
    },
    viewport: {
      height: '100vh',
      adjustForKeyboard: true,
      preventOverscroll: true,
    },
    grid: {
      columns: {
        xs: 4, // < 640px
        sm: 6, // >= 640px
        md: 8, // >= 768px
        lg: 12, // >= 1024px
      },
    },
  },

  performance: {
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
  },

  accessibility: {
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
  },
} as const;

// Tailwind configuration for mobile-first patterns
export const tailwindMobileConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      screens: {
        xs: '320px', // Mobile S
        sm: '375px', // Mobile M
        md: '425px', // Mobile L
        lg: '768px', // Tablet
        xl: '1024px', // Laptop
        '2xl': '1440px', // Desktop
        '3xl': '2560px', // 4K
      },
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        screen: '100dvh', // Using dynamic viewport height
      },
      maxWidth: {
        screen: '100dvw', // Using dynamic viewport width
      },
      touchAction: {
        none: 'none',
        'pan-x': 'pan-x',
        'pan-left': 'pan-left',
        'pan-right': 'pan-right',
        'pan-y': 'pan-y',
        'pan-up': 'pan-up',
        'pan-down': 'pan-down',
        pinch: 'pinch-zoom',
        manipulation: 'manipulation',
      },
    },
  },
};

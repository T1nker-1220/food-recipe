import { type Config } from 'tailwindcss';

export const spacingConfig = {
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    3.5: '0.875rem', // 14px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    11: '2.75rem', // 44px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    36: '9rem', // 144px
    40: '10rem', // 160px
    44: '11rem', // 176px
    48: '12rem', // 192px
    52: '13rem', // 208px
    56: '14rem', // 224px
    60: '15rem', // 240px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    96: '24rem', // 384px
  },

  // Layout primitives
  layout: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    gutter: {
      mobile: '1rem', // 16px
      tablet: '1.5rem', // 24px
      desktop: '2rem', // 32px
    },
    margin: {
      mobile: '1.5rem', // 24px
      tablet: '2rem', // 32px
      desktop: '3rem', // 48px
    },
    section: {
      mobile: '3rem', // 48px
      tablet: '4rem', // 64px
      desktop: '5rem', // 80px
    },
  },

  // Grid system
  grid: {
    columns: {
      mobile: 4,
      tablet: 8,
      desktop: 12,
    },
    gap: {
      mobile: '1rem', // 16px
      tablet: '1.5rem', // 24px
      desktop: '2rem', // 32px
    },
  },

  // Component spacing
  components: {
    card: {
      padding: {
        mobile: '1rem', // 16px
        tablet: '1.5rem', // 24px
        desktop: '2rem', // 32px
      },
      gap: {
        mobile: '0.75rem', // 12px
        tablet: '1rem', // 16px
        desktop: '1.5rem', // 24px
      },
    },
    form: {
      gap: {
        mobile: '1rem', // 16px
        tablet: '1.5rem', // 24px
        desktop: '2rem', // 32px
      },
      fieldset: {
        gap: {
          mobile: '0.75rem', // 12px
          tablet: '1rem', // 16px
          desktop: '1.5rem', // 24px
        },
      },
    },
  },
} as const;

export const tailwindSpacingConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      spacing: spacingConfig.spacing,
      maxWidth: spacingConfig.layout.container,
      gap: spacingConfig.grid.gap,
      gridTemplateColumns: {
        mobile: `repeat(${spacingConfig.grid.columns.mobile}, minmax(0, 1fr))`,
        tablet: `repeat(${spacingConfig.grid.columns.tablet}, minmax(0, 1fr))`,
        desktop: `repeat(${spacingConfig.grid.columns.desktop}, minmax(0, 1fr))`,
      },
    },
  },
} as const;

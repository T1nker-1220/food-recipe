import type { Config } from 'tailwindcss';

// Define typography configuration with correct tuple format for fontSize
export const typographyConfig = {
  fontFamily: {
    primary: ['Inter var', 'sans-serif'],
    secondary: ['Playfair Display', 'serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    // Desktop scale
    '3xl': ['3.815rem', { lineHeight: '1.1' }] as [string, { lineHeight: string }], // 61.04px
    '2xl': ['3.052rem', { lineHeight: '1.1' }] as [string, { lineHeight: string }], // 48.83px
    xl: ['2.441rem', { lineHeight: '1.1' }] as [string, { lineHeight: string }], // 39.06px
    lg: ['1.953rem', { lineHeight: '1.2' }] as [string, { lineHeight: string }], // 31.25px
    md: ['1.563rem', { lineHeight: '1.3' }] as [string, { lineHeight: string }], // 25.00px
    base: ['1.25rem', { lineHeight: '1.5' }] as [string, { lineHeight: string }], // 20.00px
    sm: ['1rem', { lineHeight: '1.5' }] as [string, { lineHeight: string }], // 16.00px
    xs: ['0.8rem', { lineHeight: '1.5' }] as [string, { lineHeight: string }], // 12.80px
  },
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    tight: '1.1',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
  },
};

// Export the Tailwind config
export const tailwindTypographyConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      fontFamily: typographyConfig.fontFamily,
      fontSize: typographyConfig.fontSize,
      fontWeight: typographyConfig.fontWeight,
      lineHeight: typographyConfig.lineHeight,
      letterSpacing: typographyConfig.letterSpacing,
    },
  },
};

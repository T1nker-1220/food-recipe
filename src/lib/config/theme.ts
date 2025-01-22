import { type Config } from 'tailwindcss';

export const themeConfig = {
  themes: {
    light: {
      // Base colors
      background: 'var(--neutral-50)',
      foreground: 'var(--neutral-950)',

      // Component colors
      card: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
        hover: 'var(--neutral-100)',
      },
      popover: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
      },
      modal: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
        overlay: 'rgb(0 0 0 / 0.4)',
      },
      drawer: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
        overlay: 'rgb(0 0 0 / 0.4)',
      },

      // Form elements
      input: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
        placeholder: 'var(--neutral-500)',
        focus: {
          border: 'var(--primary-500)',
          ring: 'var(--primary-500/20)',
        },
      },
      select: {
        background: 'var(--neutral-50)',
        foreground: 'var(--neutral-950)',
        border: 'var(--neutral-200)',
      },
      checkbox: {
        background: 'var(--neutral-50)',
        foreground: 'var(--primary-600)',
        border: 'var(--neutral-300)',
      },
      radio: {
        background: 'var(--neutral-50)',
        foreground: 'var(--primary-600)',
        border: 'var(--neutral-300)',
      },

      // Interactive elements
      button: {
        primary: {
          background: 'var(--primary-600)',
          foreground: 'var(--neutral-50)',
          border: 'var(--primary-600)',
          hover: {
            background: 'var(--primary-700)',
            border: 'var(--primary-700)',
          },
          active: {
            background: 'var(--primary-800)',
            border: 'var(--primary-800)',
          },
          disabled: {
            background: 'var(--neutral-200)',
            foreground: 'var(--neutral-500)',
            border: 'var(--neutral-200)',
          },
        },
        secondary: {
          background: 'var(--secondary-600)',
          foreground: 'var(--neutral-50)',
          border: 'var(--secondary-600)',
          hover: {
            background: 'var(--secondary-700)',
            border: 'var(--secondary-700)',
          },
          active: {
            background: 'var(--secondary-800)',
            border: 'var(--secondary-800)',
          },
          disabled: {
            background: 'var(--neutral-200)',
            foreground: 'var(--neutral-500)',
            border: 'var(--neutral-200)',
          },
        },
        outline: {
          background: 'transparent',
          foreground: 'var(--neutral-950)',
          border: 'var(--neutral-200)',
          hover: {
            background: 'var(--neutral-100)',
            border: 'var(--neutral-300)',
          },
          active: {
            background: 'var(--neutral-200)',
            border: 'var(--neutral-400)',
          },
          disabled: {
            background: 'transparent',
            foreground: 'var(--neutral-500)',
            border: 'var(--neutral-200)',
          },
        },
      },

      // Status colors
      status: {
        info: {
          background: 'var(--info-50)',
          foreground: 'var(--info-900)',
          border: 'var(--info-200)',
          icon: 'var(--info-500)',
        },
        success: {
          background: 'var(--success-50)',
          foreground: 'var(--success-900)',
          border: 'var(--success-200)',
          icon: 'var(--success-500)',
        },
        warning: {
          background: 'var(--warning-50)',
          foreground: 'var(--warning-900)',
          border: 'var(--warning-200)',
          icon: 'var(--warning-500)',
        },
        error: {
          background: 'var(--error-50)',
          foreground: 'var(--error-900)',
          border: 'var(--error-200)',
          icon: 'var(--error-500)',
        },
      },

      // Misc
      divider: 'var(--neutral-200)',
      ring: 'var(--primary-500/20)',
      skeleton: 'var(--neutral-200)',
    },

    dark: {
      // Base colors
      background: 'var(--neutral-950)',
      foreground: 'var(--neutral-50)',

      // Component colors
      card: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-800)',
        hover: 'var(--neutral-800)',
      },
      popover: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-800)',
      },
      modal: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-800)',
        overlay: 'rgb(0 0 0 / 0.8)',
      },
      drawer: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-800)',
        overlay: 'rgb(0 0 0 / 0.8)',
      },

      // Form elements
      input: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-700)',
        placeholder: 'var(--neutral-500)',
        focus: {
          border: 'var(--primary-400)',
          ring: 'var(--primary-400/20)',
        },
      },
      select: {
        background: 'var(--neutral-900)',
        foreground: 'var(--neutral-50)',
        border: 'var(--neutral-700)',
      },
      checkbox: {
        background: 'var(--neutral-900)',
        foreground: 'var(--primary-400)',
        border: 'var(--neutral-700)',
      },
      radio: {
        background: 'var(--neutral-900)',
        foreground: 'var(--primary-400)',
        border: 'var(--neutral-700)',
      },

      // Interactive elements
      button: {
        primary: {
          background: 'var(--primary-400)',
          foreground: 'var(--neutral-950)',
          border: 'var(--primary-400)',
          hover: {
            background: 'var(--primary-300)',
            border: 'var(--primary-300)',
          },
          active: {
            background: 'var(--primary-200)',
            border: 'var(--primary-200)',
          },
          disabled: {
            background: 'var(--neutral-800)',
            foreground: 'var(--neutral-600)',
            border: 'var(--neutral-800)',
          },
        },
        secondary: {
          background: 'var(--secondary-400)',
          foreground: 'var(--neutral-950)',
          border: 'var(--secondary-400)',
          hover: {
            background: 'var(--secondary-300)',
            border: 'var(--secondary-300)',
          },
          active: {
            background: 'var(--secondary-200)',
            border: 'var(--secondary-200)',
          },
          disabled: {
            background: 'var(--neutral-800)',
            foreground: 'var(--neutral-600)',
            border: 'var(--neutral-800)',
          },
        },
        outline: {
          background: 'transparent',
          foreground: 'var(--neutral-50)',
          border: 'var(--neutral-700)',
          hover: {
            background: 'var(--neutral-800)',
            border: 'var(--neutral-600)',
          },
          active: {
            background: 'var(--neutral-700)',
            border: 'var(--neutral-500)',
          },
          disabled: {
            background: 'transparent',
            foreground: 'var(--neutral-600)',
            border: 'var(--neutral-800)',
          },
        },
      },

      // Status colors
      status: {
        info: {
          background: 'var(--info-950)',
          foreground: 'var(--info-200)',
          border: 'var(--info-900)',
          icon: 'var(--info-400)',
        },
        success: {
          background: 'var(--success-950)',
          foreground: 'var(--success-200)',
          border: 'var(--success-900)',
          icon: 'var(--success-400)',
        },
        warning: {
          background: 'var(--warning-950)',
          foreground: 'var(--warning-200)',
          border: 'var(--warning-900)',
          icon: 'var(--warning-400)',
        },
        error: {
          background: 'var(--error-950)',
          foreground: 'var(--error-200)',
          border: 'var(--error-900)',
          icon: 'var(--error-400)',
        },
      },

      // Misc
      divider: 'var(--neutral-800)',
      ring: 'var(--primary-400/20)',
      skeleton: 'var(--neutral-800)',
    },
  },
} as const;

export const tailwindThemeConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      // Theme-specific colors and variants will be handled through CSS variables
      // This allows for dynamic theme switching without Tailwind class changes
    },
  },
} as const;

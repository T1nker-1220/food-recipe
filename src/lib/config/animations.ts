import { type Config } from 'tailwindcss';

export const animationConfig = {
  durations: {
    instant: '0ms',
    fastest: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slowest: '500ms',
  },

  easings: {
    // CSS easing functions
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Custom bezier curves
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.45, 0, 0.55, 1)',
  },

  transitions: {
    transform: {
      property: 'transform',
      duration: 'var(--duration-normal)',
      easing: 'var(--ease-out)',
    },
    opacity: {
      property: 'opacity',
      duration: 'var(--duration-normal)',
      easing: 'var(--ease-out)',
    },
    color: {
      property: 'color',
      duration: 'var(--duration-fast)',
      easing: 'var(--ease-in-out)',
    },
    background: {
      property: 'background',
      duration: 'var(--duration-fast)',
      easing: 'var(--ease-in-out)',
    },
    all: {
      property: 'all',
      duration: 'var(--duration-normal)',
      easing: 'var(--ease-in-out)',
    },
  },

  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideIn: {
      from: { transform: 'translateY(20px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideOut: {
      from: { transform: 'translateY(0)', opacity: '1' },
      to: { transform: 'translateY(20px)', opacity: '0' },
    },
    float: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0)' },
    },
    pulse: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)' },
    },
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  },
} as const;

export const tailwindAnimationConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      transitionDuration: animationConfig.durations,
      transitionTimingFunction: animationConfig.easings,
      keyframes: animationConfig.keyframes,
      animation: {
        fadeIn: 'fadeIn var(--duration-normal) var(--ease-out)',
        fadeOut: 'fadeOut var(--duration-normal) var(--ease-out)',
        slideIn: 'slideIn var(--duration-normal) var(--ease-out)',
        slideOut: 'slideOut var(--duration-normal) var(--ease-out)',
        float: 'float 3s var(--ease-in-out) infinite',
        pulse: 'pulse 2s var(--ease-in-out) infinite',
        spin: 'spin 1s linear infinite',
      },
    },
  },
} as const;

import { type Config } from 'tailwindcss';

export const colorConfig = {
  primary: {
    50: '#f0f9ff', // Lightest blue
    100: '#e0f2fe', // Very light blue
    200: '#bae6fd', // Light blue
    300: '#7dd3fc', // Blue
    400: '#38bdf8', // Medium blue
    500: '#0ea5e9', // Primary blue
    600: '#0284c7', // Dark blue
    700: '#0369a1', // Darker blue
    800: '#075985', // Very dark blue
    900: '#0c4a6e', // Darkest blue
    950: '#082f49', // Deep blue
  },
  secondary: {
    50: '#fdf4ff', // Lightest purple
    100: '#fae8ff', // Very light purple
    200: '#f5d0fe', // Light purple
    300: '#f0abfc', // Purple
    400: '#e879f9', // Medium purple
    500: '#d946ef', // Primary purple
    600: '#c026d3', // Dark purple
    700: '#a21caf', // Darker purple
    800: '#86198f', // Very dark purple
    900: '#701a75', // Darkest purple
    950: '#4a044e', // Deep purple
  },
  accent: {
    50: '#fff7ed', // Lightest orange
    100: '#ffedd5', // Very light orange
    200: '#fed7aa', // Light orange
    300: '#fdba74', // Orange
    400: '#fb923c', // Medium orange
    500: '#f97316', // Primary orange
    600: '#ea580c', // Dark orange
    700: '#c2410c', // Darker orange
    800: '#9a3412', // Very dark orange
    900: '#7c2d12', // Darkest orange
    950: '#431407', // Deep orange
  },
  semantic: {
    success: {
      50: '#f0fdf4', // Lightest green
      100: '#dcfce7', // Very light green
      200: '#bbf7d0', // Light green
      300: '#86efac', // Green
      400: '#4ade80', // Medium green
      500: '#22c55e', // Primary green
      600: '#16a34a', // Dark green
      700: '#15803d', // Darker green
      800: '#166534', // Very dark green
      900: '#14532d', // Darkest green
      950: '#052e16', // Deep green
    },
    warning: {
      50: '#fefce8', // Lightest yellow
      100: '#fef9c3', // Very light yellow
      200: '#fef08a', // Light yellow
      300: '#fde047', // Yellow
      400: '#facc15', // Medium yellow
      500: '#eab308', // Primary yellow
      600: '#ca8a04', // Dark yellow
      700: '#a16207', // Darker yellow
      800: '#854d0e', // Very dark yellow
      900: '#713f12', // Darkest yellow
      950: '#422006', // Deep yellow
    },
    error: {
      50: '#fef2f2', // Lightest red
      100: '#fee2e2', // Very light red
      200: '#fecaca', // Light red
      300: '#fca5a5', // Red
      400: '#f87171', // Medium red
      500: '#ef4444', // Primary red
      600: '#dc2626', // Dark red
      700: '#b91c1c', // Darker red
      800: '#991b1b', // Very dark red
      900: '#7f1d1d', // Darkest red
      950: '#450a0a', // Deep red
    },
    info: {
      50: '#f0f9ff', // Lightest cyan
      100: '#e0f2fe', // Very light cyan
      200: '#bae6fd', // Light cyan
      300: '#7dd3fc', // Cyan
      400: '#38bdf8', // Medium cyan
      500: '#0ea5e9', // Primary cyan
      600: '#0284c7', // Dark cyan
      700: '#0369a1', // Darker cyan
      800: '#075985', // Very dark cyan
      900: '#0c4a6e', // Darkest cyan
      950: '#082f49', // Deep cyan
    },
  },
  neutral: {
    50: '#f9fafb', // White
    100: '#f3f4f6', // Very light gray
    200: '#e5e7eb', // Light gray
    300: '#d1d5db', // Gray
    400: '#9ca3af', // Medium gray
    500: '#6b7280', // Primary gray
    600: '#4b5563', // Dark gray
    700: '#374151', // Darker gray
    800: '#1f2937', // Very dark gray
    900: '#111827', // Darkest gray
    950: '#030712', // Almost black
  },
} as const;

export const tailwindColorConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      colors: {
        ...colorConfig,
      },
    },
  },
} as const;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Riara Brand Colors
        'riara-primary': '#6B2B5F',
        'riara-primary-dark': '#4A1D42',
        'riara-primary-light': '#8B4578',
        'riara-accent': '#9B59B6',
        'riara-accent-hover': '#8E44AD',
        'riara-secondary': '#E8D5E3',
        'riara-secondary-light': '#F5EEF3',
        // Legacy primary/secondary for backward compatibility (mapped to Riara colors)
        primary: {
          50: '#F5EEF3',
          100: '#E8D5E3',
          200: '#D4AAC7',
          300: '#C07FAB',
          400: '#AD5490',
          500: '#6B2B5F',
          600: '#4A1D42',
          700: '#4A1D42',
          800: '#4A1D42',
          900: '#4A1D42',
          DEFAULT: '#6B2B5F',
          dark: '#4A1D42',
          light: '#8B4578',
        },
        secondary: {
          50: '#F5EEF3',
          100: '#E8D5E3',
          200: '#E8D5E3',
          300: '#E8D5E3',
          400: '#E8D5E3',
          500: '#E8D5E3',
          600: '#E8D5E3',
          700: '#E8D5E3',
          800: '#E8D5E3',
          900: '#E8D5E3',
          DEFAULT: '#E8D5E3',
          light: '#F5EEF3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config



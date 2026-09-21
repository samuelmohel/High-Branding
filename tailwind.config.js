/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#111111',
          soft: '#1A1A1A',
          muted: '#2E2E2E',
        },
        navy: {
          950: '#060B14',
          900: '#0B1528',
          850: '#101F38',
          800: '#162847',
          700: '#233963',
          100: '#EEF2F8',
          50: '#F5F7FA',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D4',
          200: '#EFE0A7',
          300: '#E4CC75',
          400: '#D9B54A',
          500: '#C5A059',
          600: '#B08838',
          700: '#8F6A22',
        },
        paper: {
          50: '#FFFFFF',
          100: '#FAFAF7',
          200: '#F4F4F0',
          300: '#EAEAE5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'loose-editorial': '0.15em',
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(197, 160, 89, 0.15)',
        'navy-soft': '0 8px 30px -4px rgba(11, 21, 40, 0.12)',
      }
    },
  },
  plugins: [],
}

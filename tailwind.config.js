/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#3730A3',
          light: '#818CF8',
        },
        secondary: {
          DEFAULT: '#60A5FA',
          dark: '#3B82F6',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: '#F59E0B',
        error: '#EF4444',
        surface: {
          light: '#F8FAFC',
          dark: '#1E293B',
          cardDark: '#0F172A',
        },
        text: {
          primary: '#111827',
          secondary: '#64748B',
          muted: '#94A3B8',
          darkPrimary: '#F8FAFC',
          darkSecondary: '#CBD5E1',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        btn: '14px',
        card: '22px',
        input: '14px',
        img: '20px',
        badge: '999px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
        'hover': '0 10px 30px -4px rgba(79, 70, 229, 0.15)',
        'hover-dark': '0 10px 30px -4px rgba(79, 70, 229, 0.25)',
        'glow': '0 0 40px -10px rgba(79, 70, 229, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

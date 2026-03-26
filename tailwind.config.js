/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#f3f6fb',
        ink: '#0f172a',
        body: '#5f6c82',
        card: '#ffffff',
        borderSoft: '#dce3ee',
        navy: '#0f1e38',
        cobalt: '#2563eb',
        mint: '#16a34a',
        orange: '#f97316',
        violet: '#7c3aed',
        skyTint: '#deebff',
        mintTint: '#dcfce7',
        orangeTint: '#ffedd5',
        violetTint: '#ede9fe'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 30px rgba(15, 23, 42, 0.08)',
        lift: '0 24px 60px rgba(15, 23, 42, 0.12)'
      },
      borderRadius: {
        '4xl': '1.6rem'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        rise: 'rise 0.7s ease-out both'
      }
    },
  },
  plugins: [],
};

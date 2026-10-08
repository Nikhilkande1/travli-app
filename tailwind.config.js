/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        travli: {
          navy: '#0B132B',
          navyLight: '#1C2541',
          blue: '#1D4ED8',
          blueLight: '#3B82F6',
          gold: '#F59E0B',
          saffron: '#E65100',
          orange: '#FF70043',
          sand: '#FAF8F5',
          card: '#FFFFFF',
          charcoal: '#1E293B',
          slate: '#64748B',
          border: '#E2E8F0',
          success: '#10B981',
          error: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.06), 0 2px 6px -1px rgba(11, 19, 43, 0.04)',
        'float': '0 12px 36px -4px rgba(11, 19, 43, 0.12), 0 4px 12px -2px rgba(11, 19, 43, 0.08)'
      }
    },
  },
  plugins: [],
}

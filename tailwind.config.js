/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          indigo: '#2d255a',
          navy: '#130e34',
          blue: '#2a5686',
          darkAzure: '#348fbb',
          mediumAzure: '#3bc4e7',
          vividAzure: '#3fd6f8',
          lightAzure: '#bdf3ff',
        },
        accent: {
          purple: '#9d4edd',
          pink: '#f72585',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Sans', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(63, 214, 248, 0.5), 0 0 40px rgba(63, 214, 248, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(63, 214, 248, 0.8), 0 0 60px rgba(63, 214, 248, 0.5)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
}


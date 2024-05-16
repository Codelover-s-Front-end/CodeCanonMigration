/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primaryBackground': '#1fb6ff',
        'secondBackground': '#ffffff2b',
        'tabBackground': '#151d24',
        'thirdBackground': '#263228',
        'fourthBackground': '#0f1419',
        'iconBackground' : '#53606B',
        'primaryFontColor': '#1fb6ff',
        'fontEarn': '#93C152',
        'fontLost': '#ED2222',
        'secondFontColor': '#b3b3b3',
        'green': '#25cb3c',
        'medalFont': '#FFF391',
        'listBorder': '#2d343a',
        'modalHeader': '#0d0e0f'
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 1s ease-in-out forwards',
      },
      gridTemplateColumns: {
        'createTeam': '25% 18.75% 18.75% 18.75% 18.75%',
        'editTableBody': '40% 20% 20% 20%',
        'memberInfo': '60% 20% 20%'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}
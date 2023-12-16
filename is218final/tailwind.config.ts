import { colors, nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'buttonRed': '#A52323'
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: '#000000'
          },
          secondary: {
            DEFAULT: '#FFFFFF'
          }
        }
      },
      light: {
        colors: {
          primary: {
            DEFAULT: '#000000'
          },
          secondary: {
            DEFAULT: '#FFFFFF'
          }
        }
      }
    }
  })],
}
export default config

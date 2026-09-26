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
        base: {
          900: '#080808',
          800: '#111111',
          700: '#171717',
          600: '#2A2A2A',
        },
        text: {
          primary: '#F5F5F0',
          secondary: '#8A8A8A',
        },
        accent: {
          DEFAULT: '#CCFF00', // Electric lime
          hover: '#B3E600',
        },
        border: {
          DEFAULT: '#222222',
          hover: '#333333'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

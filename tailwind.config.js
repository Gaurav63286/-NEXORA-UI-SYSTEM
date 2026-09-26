/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#111111',
        'surface-elevated': '#171717',
        border: '#222222',
        'text-primary': '#F5F5F0',
        'text-secondary': '#8A8A8A',
        accent: '#BFFF00',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      animation: {
        'spring': 'spring 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1f2228',
          light: '#272b33',
          lighter: '#2f343e',
        },
      },
      fontFamily: {
        sans: ['"SN Pro"', 'sans-serif'],
      },
      fontSize: {
        judul: ['18px', { lineHeight: '1.2' }],
        'judul-md': ['20px', { lineHeight: '1.2' }],
        deskripsi: ['14px', { lineHeight: '1.5' }],
        'deskripsi-md': ['16px', { lineHeight: '1.5' }],
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

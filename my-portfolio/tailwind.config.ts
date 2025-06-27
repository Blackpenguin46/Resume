export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14', // bright green neon
        accentPink: '#e75480',
        accentPurple: '#a259ff',
      },
      fontFamily: {
        mono: ['Fira Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #181824 0%, #23243a 100%)',
        'accent-gradient': 'linear-gradient(90deg, #39ff14 0%, #a259ff 100%)',
      },
      borderColor: {
        accentPurple: '#a259ff',
      },
    },
  },
  plugins: [],
}; 
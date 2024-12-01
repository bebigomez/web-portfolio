/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'Uno/dos': '1fr, 1fr',
      },
      colors: {
        'primary': '#2000FF',
      },
    },
  },
  plugins: [],
  darkMode: "class"
};

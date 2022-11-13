/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "purple-shade-1": "#4D1876",
        "purple-shade-2": "#421565",
        "purple-shade-3": "#371154",
        "purple-shade-4": "#2C0E44",
        "purple-shade-5": "#210A33",
        "purple-shade-6": "#160722",
        "purple-shade-7": "#0B0311",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")
  ],
};

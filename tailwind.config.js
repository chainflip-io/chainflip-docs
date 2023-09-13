/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // atomic kit colors
        "cf-gray-1": "#0A0A0A",
        "cf-gray-2": "#111111",
        "cf-gray-3": "#161616",
        "cf-gray-4": "#2B2B2B",
        "cf-gray-5": "#424242",

        "cf-light-1": "#5F5F5F",
        "cf-light-2": "#909090",
        "cf-light-3": "#CDCDCD",
        "cf-light-4": "#F6F6F6",
        "cf-white": "#FFFFFF",

        "cf-green-1": "#46DA93",
        "cf-green-2": "#3DBF81",
        "cf-green-3": "#A8FFD5",
        "cf-green-4": "#0E2C1D",

        "cf-orange-1": "#EC9F0A",
        "cf-orange-2": "#FFD2A8",
        "cf-orange-3": "#FFF2D0",
        "cf-orange-4": "#2F2002",

        "cf-blue-1": "#1B76FF",
        "cf-blue-2": "#A8E5FF",
        "cf-blue-3": "#DAE9FF",
        "cf-blue-4": "#C9A8FF",
        "cf-blue-5": "#051833",

        "cf-pink-1": "#FF33AF",

        "cf-red-1": "#F64848",
        "cf-red-2": "#FFA8A8",
        "cf-red-3": "#FFD7D7",
        "cf-red-4": "#310E0E",
      },
      fontFamily: {
        aeonikRegular: ["Aeonik-Regular", "Helvetica", "Arial", "sans-serif"],
        aeonikMedium: ["Aeonik-Medium", "Helvetica", "Arial", "sans-serif"],
        aeonikBold: ["Aeonik-Bold", "Helvetica", "Arial", "sans-serif"],
        aeonikMono: ["Aeonik-Mono", "Helvetica", "Arial", "sans-serif"],
        monumentRegular: [
          "monument-regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        monumentLight: ["monument-light", "Helvetica", "Arial", "sans-serif"],
        monumentUltraLight: [
          "monument-ultralight",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        monumentBlack: ["monument-black", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

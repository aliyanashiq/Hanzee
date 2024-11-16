/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-custom-shape': {
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        },
        '.clip-custom-shap': {
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
      });
    },
  ],
}

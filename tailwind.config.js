/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/reactLogo.js",
    "./src/components/AddButton.js",
    "./src/components/ClearButton.js",
    "./src/components/DeleteListButton.js",
    "./src/components/EditDoneListButton.js",
    "./src/components/EditListButton.js",
    "./src/components/header.js",
    "./src/components/InputEdit.js",
    "./src/components/reactLogo.js",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

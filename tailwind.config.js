/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                evening: "#2A1D2E",
                "evening-dark": "#1B121E",
                Vichyssoise: "#E9CA78",
                "Vichyssoise-dark": "#E9CA78",
                dirt: "#569C97",
                "dirt-light": "#787273",
                curiousity: "#DCE9BE",
                piup: "#59515D",
            },
        },
        fontFamily: {
            sans: ["Montserrat"],
            roboto: ["Roboto", "sans-serif"],
            Montserrat: ["Montserrat"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@headlessui/tailwindcss"),
    ],

    variants: {
        extend: {
            border: ["focus"],
            ring: ["focus"],
        },
    },
};

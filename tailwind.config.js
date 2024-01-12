/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#493EF2",
                "secondary": "#F3F2FA",
                "text-primary": "#060A1B",
                "text-secondary": "#9BA1AE",
                "icon-primary": "#A7A8B2",
                "icon-grow": "#4BCC17",
            },
        },
    },
    plugins: [],
};

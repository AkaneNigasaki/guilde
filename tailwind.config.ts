/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                bg: "#050505",
                surface: "#0A0A0D",
                "surface-2": "#101014",

                "text-2": "rgba(255,255,255,0.55)",

                accent: "#E50027",
                "accent-2": "#FF0033",

                border: "rgba(255,255,255,0.10)",
            },

            fontFamily: {
                custom: ["RockTown", "sans-serif"],
                display: ["Archivo", "sans-serif"],
                body: ['"Inter"', "sans-serif"],
                mono: ['"JetBrains Mono"', "monospace"],
            },

            letterSpacing: {
                ultra: "0.3em",
                mega: "0.2em",
            },

            keyframes: {
                marquee: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
            },

            animation: {
                marquee: "marquee 25s linear infinite",
                "marquee-slow": "marquee 40s linear infinite",
                "marquee-fast": "marquee 15s linear infinite",
            },
            transitionTimingFunction: {
                power: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
        },
    },

    plugins: [],
};

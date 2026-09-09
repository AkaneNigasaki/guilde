import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tailwindcss from "eslint-plugin-tailwindcss";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tailwindcss.configs["flat/recommended"],

    {
        rules: {
            "tailwindcss/no-unnecessary-arbitrary-value": "warn",
        },
    },
);

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-bg": "var(--nav-bg)",
        "primary-color": "var(--primary-color)",
        "title-color": "var(--title-color)",
        "paragraph-color": "var(--paragraph-color)",
        "secondary-color": "var( --secondary-color)",
        "border-color": "var( --border-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;

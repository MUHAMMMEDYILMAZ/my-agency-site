import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7C3AED",
          dark: "#0A021F",
        },
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(to bottom right, #050816, #08001F, #21004A)",
      },
      // 👇 هنا تمت إضافة إعدادات الحركة (Animation)
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
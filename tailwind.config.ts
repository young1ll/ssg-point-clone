import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spoint: "#a16c0c",
        benefits: "#d9044b",
        mypoint: "#ea035c",
        cscenter: "#5c1880",
        membership: "#04857f",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans KR",
          "Malgun Gothic",
          "gulim",
          "helvetica",
          "arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(110deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
        // "gradient-primary-line":
        //   "linear-gradient(93.4deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
        "gradient-primary-clip":
          "linear-gradient(106.4deg,#eb0000 6.03%,#eb6612 21.34%,#c68200 37.11%,#fc348c 52.88%,#7720a7 67.72%,#0ca19a 82.1%,#00c4b4 103.04%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

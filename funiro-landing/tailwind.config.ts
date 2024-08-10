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
        'gray1': '#3A3A3A',
        'gray2': '#616161',
        'gray3': '#898989',
        'white': '#FFFFFF',
        'primary1': '#F9F1E7',
        'primary2': '#FCF8F3',
        'primary3': '#E89F71',
        'opacityBlock': 'rgba(255, 255, 255, 0.82)',
      },
      fontSize: {
        'heading': "28px"
      }
    },
  },
  plugins: [],
};
export default config;

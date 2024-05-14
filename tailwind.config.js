/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#0ef",
        "cobble-400": "#d6dede",
        "cobble-600": "#91a3ac",
        "cobble-800": "#527276",
        "cobble-1000": "#62675f",
        "amazon-green-200": "#ECF39E",
        "amazon-green-400": "#90A955",
        "amazon-green-600": "#4F772D",
        "amazon-green-800": "#31572C",
        "amazon-green-1000": "#132A13",
        "amazon-brown": "#593C1B",
      },
      backgroundImage: {
        "hero-bg": "url('public/assets/images/herobg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        "infinite-scroll2": "infinite-scroll2 10s linear infinite",
        "wiggle-2": "wiggle 0.5s ease-in-out infinite",
        "spin-2": "spin 1s ease-out ",
        "breath-2": "breath 3s ease-in-out infinite",
        bounce: "bounce 1s ease-in infinite",
        extend: "extend 1s 0.5s ease-in-out forwards",
        flicker: "flicker 5s linear infinite",
        sliding: "sliding 8s ease-in-out infinite",
        appear: "appear 1s 2.5s linear forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll2": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        breath: {
          "0%, 100%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        extend: {
          from: {
            height: "100%",
          },
          to: {
            height: "120%",
          },
        },
        flicker: {
          "0%, 5%, 58%, 63%, 68%, 100%": {
            opacity: "0.9",
          },
          "1%, 60%, 66%": {
            opacity: "0.8",
          },
          "3%, 62%, 67%": {
            opacity: "0.7",
          },
        },
        sliding: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-65px)",
          },
          "50%": {
            transform: "translateY(-130px)",
          },
          "75%": {
            transform: "translateY(-195px)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
    screens: {
      xs: "425px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        cyan: {
          strong: "hsl(172, 67%, 45%)",
        },
        neutral: {
          "very-dark-cyan": "hsl(183, 100%, 15%)",
          "dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "grayish-cyan": "hsl(184, 14%, 56%)",
          "light-grayish-cyan": "hsl(185, 41%, 84%)",
          "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      fontSize: {
        "form-input": ["24px", "1.5"], // 24px with 1.5 line height
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-spinner": {
          "-moz-appearance": "textfield",
          "-webkit-appearance": "none",
        },
        ".no-spinner::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
        ".no-spinner::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
        },
      });
    },
  ],
};

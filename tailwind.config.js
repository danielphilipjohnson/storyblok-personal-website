module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#7E5FA0",
          dark: "#303146",
          mid:"#0a1435",
          light: "#987FB3",
          alt: "#3a3c55",
        },
        highlight: "#a2a7d646",
        secondary: "#81A05F",
        tricary: "#5FA07E",
        dark: "#102a43",
        light: "#1A446C",
        base: "rgb(55, 53, 47)",
        gray: "#4B4B4B",
        grey: "rgb(235, 236, 237)",
        "light-gray": "#696969",
        "dark-gray": "#4F4F4F",
        black: "#201F1B",
        text: {
          black: "rgb(10, 12, 16)",
          white: "#FEFEFE",
          dark:"rgb(51, 51, 51)"
        },
        badge: "#a1a5e438",
        danger:"#e13557",
        input:"#e1e2eb",
        hotpurple:"#5b21b6"
      },
      spacing: {
        banner: '37rem',

       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

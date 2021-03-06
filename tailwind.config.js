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
        secondary: "#556b3d",
        tricary: "#5FA07E",
        dark: "#102a43",
        light: "#1A446C",
        base: "rgb(55, 53, 47)",
        gray: "#4B4B4B",
        grey: "rgb(235, 236, 237)",
        "light-gray": "#BDB6B6",
        "dark-gray": "#4F4F4F",
        black: "#201F1B",
        text: {
          black: "rgb(10, 12, 16)",
          white: "#FEFEFE",
          dark:"rgb(51, 51, 51)"
        },
        badge: "#a1a5e438",
        danger:"#ae0728",
        input:"#e1e2eb",
        hotpurple:"#5b21b6",
        tools:{
          wordpress:"#21759b",
          php:"#6469AA",
          tailwind:"#107F7B",
          javascript:"#794F0C",
          docker:"#005A8F",
          nuxt:"#27624D",
          prismic:"#030b39",
          netlify:"#215F69",
          typescript:"#025892",
          mailchimp:"#f5de0f",
          aws:"#f09213",
          firebase:"#F6912C",
          vue:"#48b884",
          vuex:"#344155",
          bootstrap:"#60458a",
          algolia:"#5f58ff",
          react:"#56d3fe",
          freecodecamp:"#0a0a22",
          sass:"#D17BAA",
          html:"#844506",
          css:"#004b77"
        }
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

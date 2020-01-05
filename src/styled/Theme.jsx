const palette = {
  primary: "#18f4c9",
  secondary: "#3264E8",
  background: "#1E3359",
  backgroundTransparent: "rgba(30, 51, 89, 0.6)",
  none: "rgba(0,0,0,0)",
  secondaryText: "#8B8B8B",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
  white: "#FFF",
  black: "#000",
  formPlaceholder: "#BDBDBD",
  footer: "#1d273a",
}

const generalElements = {
  height: "5rem",
  padding: "0 2rem",
  "font-size": "2rem",
}

const buttons = {
  borders: {
    primary: `none`,
    secondary: `1px solid ${palette.primary}`,
  },
  background: {
    primary: `${palette.primary}`,
    secondary: `${palette.none}`,
  },
  text: {
    primary: "#000",
    secondary: `${palette.primary}`,
  },
  ...generalElements,
}

const forms = {
  backgroundColor: "#F2F2F2",
  placeHolder: `${palette.placeHolder}`,
  inputText: `${palette.black}`,
}

const textStyle = {
  color: {
    white: `${palette.white}`,
    navBarSecondary: `${palette.background}`,
    secondaryText: `${palette.secondaryText}`,
  },
  heroTitleStyle: {
    h2: {
      fontSize: "6.25rem",
      lineHeight: "9.375rem",
    },
    h4: {
      letterSpacing: "0.5rem",
      fontSize: "3rem",
      lineHeight: "4rem",
      margin: "3rem auto",
      fontWeight: "normal",
    },
  },
  normalH2: {
    fontSize: "5rem",
    fontWeight: "800",
    lineHeight: "7.5rem",
    color: `${palette.background}`,
  },
}

const navBar = {
  background: {
    true: `${palette.none}`,
    false: `${palette.white}`,
  },
  text: {
    true: `${palette.white}`,
    false: `${textStyle.navBarSecondary}`,
  },
  shadow: {
    true: "none",
    false: "0px 0px 20px rgba(0, 0, 0, 0.05);",
  },
}

const tags = {
  font: "2rem",
  height: "4rem",
  padding: `${generalElements.padding}`,
  borderRadius: "40px",
  background: {
    selected: `${palette.secondary}`,
    unselected: "rgba(50, 100, 232, 0.1)",
  },
  color: {
    selected: `${palette.white}`,
    unselected: `${palette.secondary}`,
  },
}

const fontFamily = {
  heading: "'Lato', sans-serif",
  body: "'Lora', serif",
}

const allStyles = {
  buttons,
  forms,
  textStyle,
  palette,
  tags,
  navBar,
  fontFamily,
}

export default allStyles

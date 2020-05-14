import { createGlobalStyle } from "styled-components"
import { TTRegular, TTExtraBold, TTBold, Lora } from "../lib/fonts"
import allStyles from "./Theme"
const { palette } = allStyles

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 8px;
  --lora: ${Lora};
  --tt-reg: ${TTRegular};
  --tt-bold: ${TTBold};
  --tt-extra: ${TTExtraBold};
  --dark-blue: ${palette.background};
  --primary: ${palette.primary};
  --secondary: ${palette.secondary}
}

body {
  font-family: var(--tt-reg);
  overflow-x:hidden;
  width: 100vw;
  overflow-y:auto;

}

button {
  font-family: var(--tt-reg)
}

.p {
  font-family: var(--lora)
}

 a {
    text-decoration: none;
  }
`

export default GlobalStyle

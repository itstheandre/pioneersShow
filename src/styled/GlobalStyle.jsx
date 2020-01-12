import { createGlobalStyle } from "styled-components"
import { TTRegular, TTExtraBold, TTBold, Lora } from "../lib/fonts"

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
  --tt-extra: ${TTExtraBold}
}

body {
  font-family: var(--tt-reg);

}

.p {
  font-family: var(--lora)
}

 a {
    text-decoration: none;
  }
`

export default GlobalStyle

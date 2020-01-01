import styled from "styled-components"
import allStyles from "./Theme"
const { textStyle } = allStyles
const { color, normalH2 } = textStyle
const { h2, h4 } = textStyle.heroTitleStyle

const UpperCased = styled.h3`
  font-size: ${h4.fontSize};
  color: ${color.white};
  letter-spacing: ${h4.letterSpacing};
  font-weight: ${h4.fontWeight};
  text-transform: uppercase;
  margin: ${h4.margin};
`

const MainHeroTitle = styled.h1`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  color: ${color.white};
  width: 87.5rem;
  text-align: center;
`

const MainH2 = styled.h3`
  /* font-size: ${normalH2.fontSize}; */
  font-size: 40px;
  font-weight: ${normalH2.fontWeight};
  line-height: ${normalH2.lineHeight};
  color: ${normalH2.color};
`

export { UpperCased, MainHeroTitle, MainH2 }

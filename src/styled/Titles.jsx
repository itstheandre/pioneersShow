import styled from "styled-components"
import allStyles from "./Theme"
const { textStyle } = allStyles
const { color, normalH2 } = textStyle
const { h2, h4 } = textStyle.heroTitleStyle

const UpperCased = styled.h3`
  font-size: ${h4.fontSize};
  color: ${color.white};
  letter-spacing: ${h4.letterSpacing};
  /* font-weight: ${h4.fontWeight}; */
  text-transform: uppercase;
  margin: ${h4.margin};
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 10vh;
  }
`

const MainHeroTitle = styled.h1`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  color: ${color.white};
  width: 100%;
  text-align: center;
  font-family: var(--tt-extra);
`

const MainH2 = styled.h3`
  font-size: ${normalH2.fontSize};

  font-size: 40px;
  font-weight: ${normalH2.fontWeight};
  line-height: ${normalH2.lineHeight};
  color: ${normalH2.color};
  text-align: center;
`

const TestH2 = styled(MainH2)`
  @media screen and (max-width: 479px) {
    font-size: 4vh;
    line-height: 6vh;
    text-align: left;
  }
`

const ResponsiveH2 = styled(MainH2)`
  /* width: 100%; */
  text-align: center;
  /* text-align: start; */
`

const AboutBodyText = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  padding: 0;
  margin: 2rem 0;
  text-align: justify;
  font-family: var(--lora);
`

const HomeBodyText = styled(AboutBodyText)`
  width: 65%;
  text-align: center;
  margin: 2rem 0;
`

export {
  UpperCased,
  ResponsiveH2,
  MainHeroTitle,
  MainH2,
  AboutBodyText,
  HomeBodyText,
  TestH2,
}

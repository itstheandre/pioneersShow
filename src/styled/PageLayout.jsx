import allStyles from "./Theme"
import styled from "styled-components"

const { palette, textStyle } = allStyles
const { color, normalH2 } = textStyle
const { h2, h4 } = textStyle.heroTitleStyle

const PageLayout = styled.div`
  z-index: -1;
  position: relative;
  /* background: green; */

  .hero {
    height: ${props => {
      if (props.homePage) return "100vh"
      return "60vh"
    }};
    position: absolute;
    width: 100vw;
    background-size: cover;
    background-position: center;
    /* background-color: #1e3359; */
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0;
    display: flex;
    align-items: center;
    font-family: var(--tt-bold);
    margin-bottom: 17rem;

    .heroText {
      h1 {
        font-size: 8rem;
        line-height: 12rem;
        font-weight: 800;
        color: ${palette.white};
        padding-bottom: 2rem;
        width: 100%;
        @media screen and (max-width: 780px) {
          font-size: 5vh;
          line-height: 7.5vh;
        }
      }
    }
  }
  h2 {
    font-family: var(--tt-bold);

    font-size: ${normalH2.fontSize};
    font-size: 40px;
    font-weight: ${normalH2.fontWeight};
    line-height: ${normalH2.lineHeight};
    color: ${normalH2.color};
    text-align: center;
  }
  .flexed {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .iconWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 18rem;
      margin: 0 auto;
      margin-bottom: 6rem;
    }
    picture {
      height: 18rem;
      margin: 0 auto;
      margin-bottom: 6rem;
    }
  }

  .homeBody {
    font-size: 2rem;
    line-height: 3rem;
    padding: 0;
    text-align: justify;
    font-family: var(--lora);
    width: 65%;
    text-align: center;
    margin: 2rem 0;
  }
`

export { PageLayout }

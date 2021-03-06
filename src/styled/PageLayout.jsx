import allStyles from "./Theme"
import styled from "styled-components"

const { palette, textStyle } = allStyles
const { color, normalH2 } = textStyle
const { h2, h4 } = textStyle.heroTitleStyle

const PageLayout = styled.div`
/* z-indelayoux: -1; */
  position: relative;

  .hero {
    height: ${props => {
      if (props.homePage) return "100vh"
      return "60vh"
    }};
    position: absolute;
    width: 100vw;
    background-size: cover;
    background-position: center;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: ${({ homePage }) => (!homePage ? "column" : "")};
    justify-content: ${({ homePage }) => (!homePage ? "center" : "")};
    font-family: var(--tt-bold);
    margin-bottom: 17rem;

    @media (max-width: 479px) {
      height: ${({ aboutPage }) => {
        if (aboutPage) return "auto"
      }};
      padding-bottom: ${({ aboutPage }) => {
        if (aboutPage) return "5vh"
      }};
    }

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

    .upperCased {
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
    }

      .secondaryHeader {
      font-size: ${h2.fontSize};
      line-height: ${h2.lineHeight};
      color: ${color.white};
      width: 100%;
      text-align: center;
      font-family: var(--tt-bold);
      }
  }
  h2 {
    font-family: var(--tt-bold);
    font-size: ${normalH2.fontSize};
    font-size: 5rem;
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

/* ---------------------------------- About --------------------------------- */


  .aboutBody {
    width: 100%;
    margin: 17rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      text-align: right;

      p {
        font-size: 2rem;
        line-height: 3rem;
        padding: 0;
        margin: 2rem 0;
        text-align: justify;
        font-family: var(--lora);
      }
    }
  }


  .contactBody {
    margin: 0 auto 15rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: var(--lora);
    /* z-index:11111; */

    p {
      margin-right: 5vw;
      font-size: 2rem;
      line-height: 4rem;
      width: 50%; 
    }

    @media (max-width: 1200px) {
      width:90%;
    }


    @media (max-width: 1100px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      p {
        margin-right:0;
        margin-top: 5vh;
        width: 75%;
      }
    }
    
  }

  .episodeBody {
    margin: 0 auto;
    margin-bottom: 0.5vh;
    width: 100%;
    max-width: 70vw;

    @media (max-width: 479px){
      margin-bottom: 1vh
    }

    h2 {
      text-align: left
    }

    .tags {
      padding: 0;
      margin-top: 4rem;
      display: flex;
      align-items: center;
    }

    .wholeList {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      width: 100%;
    }
  }
 
`

export { PageLayout }

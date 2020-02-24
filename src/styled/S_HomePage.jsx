import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const PageLayout = styled.div`
  .hero {
    background-color: ${palette.background};
    height: ${({ homePage }) => (homePage ? "100vh" : "60vh")};
    width: 100vw;
    background-image: url(${({ img }) => img}) no-repeat;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0;
    margin-bottom: 17rem;
    font-family: var(--tt-bold);
    .heroSon {
      width: 100%;
      background-color: yellow;
      display: flex;
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
`

const HomePageHero = styled.div`
  /* height: 107rem; */
  height: 100vh;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1e3359;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 17rem;
  font-family: var(--tt-bold);
`

const HomePageHeroText = styled.div`
  /* display: flex; */
  /* width: 70%; */
  width: 100%;
`

const FlexedHomePagePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeroH1 = styled.h1`
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
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 15rem; */
`

const HomeIcon = styled.img`
  height: 18rem;
  margin: 0 auto;
  margin-bottom: 6rem;
`

export {
  HomePageHero,
  HomePageHeroText,
  HeroH1,
  HomeIcon,
  IconWrapper,
  FlexedHomePagePart,
  PageLayout,
}

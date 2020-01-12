import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const HomePageHero = styled.div`
  /* height: 107rem; */
  height: 95vh;
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
  @media screen and (max-width: 479px) {
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
}

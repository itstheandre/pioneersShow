import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const SquareWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15rem;

  @media screen and (max-width: 1100px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 8vh;
  }
`

const ContentSection = styled.div`
  height: auto;
  margin: 5vh auto;
  /* padding: 1rem; */
  width: 15.5vw;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  @media screen and (max-width: 1380) {
    width: 45vw;
    margin: 5vh 55vw;
    /* margin-bottom: 5vh; */
  }
  @media screen and (max-width: 1100px) {
    /* justify-content: center; */
    margin: 3vh auto;
  }
  @media screen and (max-width: 900px) {
    width: 40vw;
  }
`

const ContentImage = styled.div`
  width: 100%;
  height: 20vh;
  background: url(${({ img }) => img}) no-repeat;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1100px) {
  }
`

const ContentOverlay = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${palette.backgroundTransparent};
  height: 100%;
`

const ContentBody = styled.div`
  /* min-width: 200px; */
  padding: 0rem 1rem;
  width: 100%;
  font-size: 1.5rem;
  height: auto;
  color: ${palette.secondaryText};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const EpisodeDescription = styled.h4`
  font-size: 1.5rem;
  padding-top: 1rem;
`

const EpisodeTitle = styled.h3`
  font-size: 2rem;
  color: ${palette.black};
`

export {
  SquareWrapper,
  ContentSection,
  ContentImage,
  ContentOverlay,
  ContentBody,
  EpisodeTitle,
  EpisodeDescription,
}

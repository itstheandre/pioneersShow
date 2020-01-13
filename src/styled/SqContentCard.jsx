import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const SquareWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 15rem;
  background-color: blue;
  width: 100%;
  height: 30vh;
`

const ContentSection = styled.div`
  /* height: 43rem; */
  /* height: 100%; */
  /* width: auto; */
  height: 35rem;
  width: 35rem;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  box-shadow: ${palette.boxShadow};
  border-radius: 6px;
  margin: 1.5rem;
`

const ContentImage = styled.div`
  width: 100%;
  height: 70%;
  background: url(${({ img }) => img}) no-repeat;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-size: cover;
  background-position: center;
`

const ContentOverlay = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${palette.backgroundTransparent};
  height: 100%;
`

const ContentBody = styled.div`
  font-size: 1.5rem;
  height: auto;
  color: ${palette.secondaryText};
  /* padding: 2rem 3rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & * {
    padding: 1rem 3rem;
  }
`

const EpisodeDescription = styled.h4`
  font-size: 1.5rem;
  padding-top: 2rem;
  /* padding: 0 3rem; */
  /* padding: 0 3rem 2rem 3rem; */
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

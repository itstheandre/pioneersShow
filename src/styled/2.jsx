import styled from "styled-components"

import { MainH2 } from "./Titles"

const EpisodePageHero = styled.div`
  height: 60vh;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1e3359;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 70vh;
  }
`

const EpisodeTags = styled.div`
  padding: 0;
  margin-top: 4rem;
  /* height: 100rem; */
  /* background-color: black; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
`

const EpisodeBody = styled.div`
  margin: 17rem auto 0.5vh auto;
  width: 100%;
  max-width: 70vw;

  @media screen and (max-width: 479px) {
    margin-bottom: 1vh;
  }
`

const EpisodeTitle = styled(MainH2)`
  text-align: left;
`

const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;
`

export { EpisodePageHero, EpisodeTitle, EpisodeTags, EpisodeBody, EpisodeList }

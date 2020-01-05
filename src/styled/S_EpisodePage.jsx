import styled from "styled-components"

const EpisodePageHero = styled.div`
  height: 62rem;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: 100%;
  /* background-position: top; */
  background-color: #1e3359;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 17rem auto;
  width: 50%;
`

const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

export { EpisodePageHero, EpisodeTags, EpisodeBody, EpisodeList }

import styled from "styled-components"

const EpisodePageHero = styled.div`
  height: 62rem;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: 100%;
  /* background-position: top; */
  background-color: blue;
  padding: 0;
`

const EpisodeTags = styled.div`
  padding: 0;
  /* height: 100rem; */
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`

export { EpisodePageHero, EpisodeTags }

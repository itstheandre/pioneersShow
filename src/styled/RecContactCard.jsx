import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const EpisodeSection = styled.div`
  width: 66rem;
  height: 9rem;
  margin: 3rem 0 3rem 0;
  display: flex;
`
const EpisodeOverlay = styled.div`
  border-radius: 6px;
  background-color: ${palette.backgroundTransparent};

  height: 100%;
  width: 9rem;
`
const IconOverlay = styled.div`
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  height: 100%;
  width: 9rem;
  z-index: 1;
`

const EpisodeImage = styled.div`
  height: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  border-radius: 6px;
`

const EpisodeBody = styled.div`
  color: ${palette.secondaryText};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 2rem;
`

const RqEpisodeDescription = styled.h4`
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

const RqEpisodeTitle = styled.h3`
  font-size: 2rem;
  color: ${palette.black};
`

export {
  EpisodeSection,
  EpisodeOverlay,
  EpisodeImage,
  EpisodeBody,
  RqEpisodeDescription,
  RqEpisodeTitle,
  IconOverlay,
}

import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const EpisodeWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  /* height: 1000px; */
  grid-gap: 3rem;
  margin: 3rem 0 16rem;
  @media screen and (max-width: 904px) {
    .episode:last-child {
      display: none;
    }
  }

  .episode {
    /* width: 43rem; */
    padding-bottom: 150%;
    position: relative;
    @media screen and (max-width: 776px) {
    padding-bottom: 80%
  }
`

const Episode = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: purple; */
  height: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  .image {
    height: 70%;
    background: url(${({ img }) => img}) no-repeat;
    /* background-color: red; */
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-size: cover;
    background-position: center;

    .imageOverlay {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-color: ${palette.backgroundTransparent};
      height: 100%;
    }
  }

  .contentBody {
    padding: 1.5rem 2rem;
    width: 100%;
    font-size: 1.5rem;
    height: auto;
    color: ${palette.secondaryText};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* background-color: yellow; */
    .description {
      font-size: 1.5rem;
      padding: 1rem 0;
    }

    .title {
      font-size: 2rem;
      color: ${palette.black};
    }
  }
`

// export // SquareWrapper,
// ContentSection,
// ContentImage,
// ContentOverlay,
// ContentBody,
// EpisodeTitle,
// EpisodeDescription,
export { EpisodeWrapper, Episode }

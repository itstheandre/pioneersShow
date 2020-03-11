import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const ReqEpisode = styled.article`
  width: 100%;
  height: 9rem;
  margin: 3rem 0 3rem 0;
  display: flex;

  .image {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    .overlay {
      border-radius: 6px;
      background-color: ${palette.backgroundTransparent};
      height: 100%;
      width: 9rem;
    }
  }

  .body {
    color: ${palette.secondaryText};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 2rem;

    .description {
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }

    .title {
      font-size: 2rem;
      color: ${palette.black};
    }
  }
`

// const RqEpisodeDescription = styled.h4`
//   font-size: 1.5rem;
//   padding-bottom: 1rem;
// `

// const RqEpisodeTitle = styled.h3`
//   font-size: 2rem;
//   color: ${palette.black};
// `

const EpisodeWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
  z-index: -1;
  margin: 3rem 0 16rem;

@media (max-width:770px) {
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

}

@media (max-width:500px) {
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

}


  .item {
    width: 100%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    z-index: -1;

    @media screen and (max-width: 904px) {
      &:last-child {
        /* background-color: red; */
        display: none;
      }
    }

    .image {
      /* background: url(${({ img }) => img}) no-repeat; */
      padding-bottom: 70%;
      width: 100%;
      position: relative;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-size: cover;
      background-position: center;

      .imageOverlay {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: ${palette.backgroundTransparent};
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }

    figcaption {
      padding: 2rem 3rem;

      .description {
        padding-bottom: 2.5rem;
        font-size: 1.5rem;
      }

      .title {
        font-size: 2rem;
        color: ${palette.black};
      }
    }
  }
`

export { EpisodeWrap, ReqEpisode }

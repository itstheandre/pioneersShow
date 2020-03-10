import styled from "styled-components"
import allStyles from "./Theme"
const { palette } = allStyles

const EpisodeWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0 16rem;

  .episode {
    padding-bottom: 150%;
    z-index: -1;
    position: relative;
    @media screen and (max-width: 904px) {
      &:last-child {
        /* background-color: red; */
        display: none;
      }
    }
    @media screen and (max-width: 776px) {
      padding-bottom: 80%;
    }
    @media screen and (max-width: 390px) {
      padding-bottom: 120%;
    }
    @media screen and (max-width: 330px) {
      padding-bottom: 150%;
    }
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

export { EpisodeWrapper, Episode, EpisodeWrap }

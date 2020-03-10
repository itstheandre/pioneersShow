import React from "react"

import { imageTest } from "../utils/image-loader"
// import SqEpisodeCard from "./Cards/SqEpisodeCard"
import styled from "styled-components"
import allStyles from "../styled/Theme"
import SqEpisode from "./Cards/SquareEpisodeCard"
import { EpisodeWrapper } from "../styled/SqContentCard"
const { palette } = allStyles

const EpWr = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0 200vh;
  /* min-height: 100%; */

  .episode {
    z-index: -1;
    position: relative;
    /* padding-bottom: 100%; */
    /* ::before {
      content: "";
      float: left;
      padding-bottom: 100%;
    }
    ::after {
      clear: left;
      content: " ";
      display: table;
    } */
    /* overflow: hidden; */
    /* :after {
      content: "";
      display: block;
      /* padding-bottom: 100%; */
    /* min-height: 100%;
      float: left; */
    /* padding-top: 100%; */
    /* }  */
    @media screen and (max-width: 904px) {
      &:last-child {
        /* background-color: red; */
        display: none;
      }
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    /* @media screen and (max-width: 776px) {
      padding-bottom: 80%;
    }
    @media screen and (max-width: 390px) {
      padding-bottom: 120%;
    }
    @media screen and (max-width: 330px) {
      padding-bottom: 150%;
    } */
  }
`

// import RcContactCard from "./Cards/RcContactCard"

const LayoutTest = styled.div`
  margin-top: 15rem;
  width: 100vw;
  .bodyWrapper {
    width: 85%;
    max-width: 1080px;
    margin: 0 auto;
  }
`

const arrayToMap = [
  {
    img: imageTest,
    title: "Season 1",
    episodeNumber: "00",
    runtime: "65m",
    publishedDate: "Yesterday",
  },
  {
    img: imageTest,
    title: "Season 1",
    episodeNumber: "00",
    runtime: "65m",
    publishedDate: "Yesterday",
  },
  {
    img: imageTest,
    title: "Season 1",
    episodeNumber: "00",
    runtime: "65m",
    publishedDate: "Yesterday",
  },
]

const Wr = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  place-items: start;
  grid-gap: 3rem;
  margin-bottom: 300vh;

  .episode {
    background: orange;
    width: 100%;
    border: 1px solid black;
    position: relative;
    ::before {
      content: "";
      z-index: 1;
      background: url(${({ img }) => img});
      posidisplay: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: 100%;
    }
    .image {
      padding-bottom: 70%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .imageOverlay {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: ${palette.backgroundTransparent};
        height: 100%;
      }
    }
  }
`

const Epi = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: purple; */
  /* height: 100%; */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  .image {
    /* height: 70%; */
    /* padding-bottom: 70%; */
    /* height: 70%; */
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

const Image = styled.div`
  background: url(${({ img }) => img}) no-repeat;
`

const TestingGround = ({ allEpisodes }) => {
  // console.log({ allEpisodes })

  return (
    <>
      <LayoutTest>
        <div className="bodyWrapper">
          <EpisodeWrap>
            {arrayToMap.map(el => (
              <SqEpisode episodeInfo={el} />
            ))}
          </EpisodeWrap>
          <section
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gridGap: "10px",
              marginBottom: "300vh",
              zIndex: "-1",
            }}
          >
            {arrayToMap.map((el, i) => (
              <figure
                className="item"
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
                  zIndex: "-1",
                }}
              >
                <div
                  className="image"
                  style={{
                    background: `url(${el.img}) no-repeat`,
                    paddingBottom: "70%",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div
                    className="imageOverlay"
                    style={{
                      background: "red",
                      borderTopLeftRadius: "6px",
                      borderTopRightRadius: "6px",
                      backgroundColor: `${palette.backgroundTransparent}`,
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                    }}
                  />
                </div>
                <figcaption className="body" style={{ padding: "16px 24px" }}>
                  <div
                    className="description"
                    style={{ paddingBottom: "20px", fontSize: "1.5rem" }}
                  >
                    {el.runtime}m | {el.publishedDate}
                  </div>
                  <div
                    className="title"
                    style={{ fontSize: "2rem", color: `${palette.black}` }}
                  >
                    #{el.episodeNumber} - {el.title}
                  </div>
                </figcaption>
              </figure>
            ))}
          </section>

          {/* <EpWr>
            {arrayToMap.map((el, i) => (
              <SqEpi
                img={el.img}
                title={el.title}
                episodeNumber={el.episodeNumber}
                runtime={el.runtime}
                publishedDate={el.publishedDate}
                i={i}
              />
            ))}
          </EpWr> */}

          <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
          <div style={{ width: "200px" }}></div>

          <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
          <div style={{ height: "100rem", backgroundColor: "blue" }}>Hi</div>
          <div style={{ height: "100rem", backgroundColor: "yellow" }}>Hi</div>
        </div>
      </LayoutTest>
    </>
  )
}

export default TestingGround

// const SqEpi = props => {
//   const { img, title, episodeNumber, runtime, publishedDate, slug, i } = props
//   console.log(i)
//   return (
//     <div className="episode">
//       <Epi img={img}>
//         <div className="image">
//           <div className="imageOverlay" />
//         </div>
//         <div className="contentBody">
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           {i < 1 && (
//             <>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//             </>
//           )}
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           <div className="title">
//             #{episodeNumber} - {title}
//           </div>
//           <div className="description">
//             {runtime}m | {publishedDate}
//           </div>
//           {i < 2 && (
//             <>
//               {" "}
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title}
//               </div>
//               <div className="description">
//                 {runtime}m | {publishedDate}
//               </div>
//               <div className="title">
//                 #{episodeNumber} - {title} Hey
//               </div>{" "}
//             </>
//           )}
//         </div>
//       </Epi>
//     </div>
//   )
// }

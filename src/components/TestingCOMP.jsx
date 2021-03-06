import React from "react"

import { imageTest } from "../utils/image-loader"
// import SqEpisodeCard from "./Cards/SqEpisodeCard"
import styled from "styled-components"
import allStyles from "../styled/Theme"
import SqEpisode from "./Cards/SquareEpisodeCard"
const { palette } = allStyles

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

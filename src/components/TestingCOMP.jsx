import React from "react"

import { imageTest } from "../utils/image-loader"
// import SqEpisodeCard from "./Cards/SqEpisodeCard"
import styled from "styled-components"
import allStyles from "../styled/Theme"
import TestingEpisodeComp from "./TestingEpisodeComp"
import { EpisodeWrapper } from "../styled/SqContentCard"
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

// const EpisodeWrapper = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
//   /* height: 1000px; */
//   grid-gap: 3rem;
//   background-color: green;
//   @media screen and (max-width: 904px) {
//     background: yellow;
//     .episode:last-child {
//       display: none;
//     }
//   }

//   .episode {
//     /* width: 43rem; */
//     padding-bottom: 100%;
//     position: relative;
//     /* background-color: yellow; */
//   }
// `

/* background: url(${({ img }) => img}) no-repeat; */

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

const TestingGround = ({ allEpisodes }) => {
  // console.log({ allEpisodes })

  return (
    <>
      <LayoutTest>
        <div className="bodyWrapper">
          <EpisodeWrapper>
            {arrayToMap.map(el => (
              <TestingEpisodeComp
                img={el.img}
                title={el.title}
                episodeNumber={el.episodeNumber}
                runtime={el.runtime}
                publishedDate={el.publishedDate}
              />
            ))}
          </EpisodeWrapper>
          {/* <EpisodeWrapper>
            <div className="episode">
              <Episode>
                <div className="image">
                  <div className="imageOverlay" />
                </div>
                <div className="contentBody">
                  <div className="description"></div>
                  <div className="title"></div>
                </div>
              </Episode>
            </div>
            <div className="episode">
              <Episode>
                <div className="image">
                  <div className="imageOverlay" />
                </div>
                <div className="contentBody">
                  <div className="description"></div>
                  <div className="title"></div>
                </div>
              </Episode>
            </div>
            <div className="episode">
              <Episode>
                <div className="image">
                  <div className="imageOverlay" />
                </div>
                <div className="contentBody">
                  <div className="description"></div>
                  <div className="title"></div>
                </div>
              </Episode>
            </div>
          </EpisodeWrapper> */}
          <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
          <div style={{ width: "200px" }}>
            {/* <SqEpisodeCard
              img={imageTest}
              title="Season 1"
              episodeNumber="00"
              runtime="65m"
              publishedDate="Yesterday"
            /> */}
          </div>
          {/* <RcContactCard img={imageTest} title="Season 2" /> */}

          <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
          <div style={{ height: "100rem", backgroundColor: "blue" }}>Hi</div>
          <div style={{ height: "100rem", backgroundColor: "yellow" }}>Hi</div>
        </div>
      </LayoutTest>
    </>
  )
}

export default TestingGround

import React from "react"

import { imageTest } from "../utils/image-loader"
// import SqEpisodeCard from "./Cards/SqEpisodeCard"
import styled from "styled-components"
import allStyles from "../styled/Theme"
import SqEpisode from "./Cards/SquareEpisodeCard"
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
              <SqEpisode
                img={el.img}
                title={el.title}
                episodeNumber={el.episodeNumber}
                runtime={el.runtime}
                publishedDate={el.publishedDate}
              />
            ))}
          </EpisodeWrapper>

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

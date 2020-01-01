import React from "react"

import { imageTest } from "../utils/image-loader"
import SqEpisodeCard from "./Cards/SqEpisodeCard"
import {
  EpisodeSection,
  EpisodeOverlay,
  EpisodeImage,
  EpisodeBody,
  RqEpisodeDescription,
  RqEpisodeTitle,
  IconOverlay,
} from "../styled/RecContactCard"
import RcContactCard from "./Cards/RcContactCard"

const TestingGround = ({ allEpisodes }) => {
  // console.log({ allEpisodes })

  return (
    <>
      <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
      <SqEpisodeCard img={imageTest} title="Season 1" />
      <RcContactCard img={imageTest} title="Season 2" />

      <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div>
      <div style={{ height: "100rem", backgroundColor: "blue" }}>Hi</div>
      <div style={{ height: "100rem", backgroundColor: "yellow" }}>Hi</div>
    </>
  )
}

export default TestingGround

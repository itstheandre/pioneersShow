import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import { EpisodePageHero, EpisodeTags } from "../../styled/S_EpisodePage"
import { EpisodePageBG } from "../../utils/image-loader"
import { useSeasons } from "../../CustomHooks/useSeasons"
import RcContactCard from "../Cards/RcContactCard"

const EpisodePageComp = ({ allEpisodes }) => {
  const { ref } = useWrapper()
  const { selected, seasonTags, episodeList } = useSeasons(allEpisodes)

  return (
    <div>
      <EpisodePageHero img={EpisodePageBG} ref={ref}></EpisodePageHero>
      <EpisodeTags>{seasonTags}</EpisodeTags>
      {episodeList}
      <div style={{ height: "500px", backgroundColor: "red" }}></div>
      <div style={{ height: "200px", backgroundColor: "grey" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "blue" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "purple" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "yellow" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "black" }}>Hi there</div>
    </div>
  )
}

export default EpisodePageComp

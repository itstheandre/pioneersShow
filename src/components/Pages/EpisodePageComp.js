import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import {
  EpisodePageHero,
  EpisodeTags,
  EpisodeBody,
  EpisodeList,
} from "../../styled/S_EpisodePage"
import { EpisodePageBG } from "../../utils/image-loader"
import { useSeasons } from "../../CustomHooks/useSeasons"
import { UpperCased, MainH2 } from "../../styled/Titles"
import { LayoutWrapper } from "../../styled/LayoutWrapper"
import { DifButton } from "../../styled/Buttons"

const EpisodePageComp = ({ allEpisodes }) => {
  const { ref } = useWrapper()
  const {
    seasonTags,
    episodeList,
    seasonState,
    updateOrder,
    sortedEpisodes,
    showNumber,
  } = useSeasons(allEpisodes)
  const lengthCheck = allEpisodes.length - sortedEpisodes.length
  // console.log(sortedEpisodes.length, "value after render")
  // console.log(seasonState.showNumber)

  return (
    <div>
      <EpisodePageHero img={EpisodePageBG} ref={ref}>
        <UpperCased>Episodes</UpperCased>
      </EpisodePageHero>
      <LayoutWrapper>
        <EpisodeBody>
          {/* <button onClick={() => updateOrder("ASC")}>Ascending</button>
          <button onClick={() => updateOrder("DESC")}>Descending</button> */}
          <MainH2>Episodes</MainH2>
          <EpisodeTags>{seasonTags}</EpisodeTags>
          <EpisodeList>{episodeList}</EpisodeList>
          {lengthCheck ? (
            <DifButton
              styleType="secondary"
              onClick={() => showNumber(2, allEpisodes, sortedEpisodes)}
            >
              Load More
            </DifButton>
          ) : (
            ""
          )}
        </EpisodeBody>
      </LayoutWrapper>
    </div>
  )
}

export default EpisodePageComp

import React, { useReducer } from "react"
import Tags from "../styled/Tags"
import RcContactCard from "../components/Cards/RcContactCard"
import SqEpisodeCard from "../components/Cards/SqEpisodeCard"
import {
  selectedEverything,
  selectedStateChange,
  seasonDispatch,
} from "../lib/funcs"

export function useSeasons(allEpisodes) {
  const allSeasons = selectedEverything(allEpisodes)
  const startingState = {
    allSeasons,
    selected: "All",
    order: "DESC",
    showNumber: 5,
  }

  const [seasonState, dispatch] = useReducer(seasonDispatch, startingState)

  const { selected } = seasonState

  function updateSeason(id, inner) {
    const allSeasonsUpdated = selectedStateChange(id, seasonState)

    dispatch({ type: "seasonUpdate", inner, allSeasons: allSeasonsUpdated })
  }

  function updateOrder(order) {
    dispatch({ type: "orderEpisodes", order })
  }

  function asc(a, b) {
    return a.episodeNumber - b.episodeNumber
  }

  function desc(a, b) {
    return b.episodeNumber - a.episodeNumber
  }

  function sortEpisodes() {
    if (filteredEpisodes.length < 2) return
    if (seasonState.order === "ASC") return asc
    else return desc
  }

  function showNumber(number, sortedEpisodes) {
    console.log(seasonState)
    dispatch({
      type: "showMore",
      payload: number,
      allEpisodes,
      sortedEpisodes,
      sortedEpisodes,
    })
  }

  // Tags
  const seasonTags = seasonState.allSeasons.map(el => {
    return (
      <Tags
        key={el.id}
        id={el.id}
        selected={el.state}
        // onClick={() => updater(el.id)}
        onClick={() => updateSeason(el.id, el.inner)}
      >
        {el.inner}
      </Tags>
    )
  })

  // Episode Filtering
  const filteredEpisodes = allEpisodes.filter(episode => {
    // const test = episode.season.some(el => el.title === selected)
    return episode.season.some(el => el.title === selected)
  })

  const sortedEpisodes = [...filteredEpisodes]
    .sort(sortEpisodes())
    .slice(0, seasonState.showNumber)

  // Rectangle ContactCard
  const episodeList = sortedEpisodes.map(el => {
    const { title, publishedDate, runtime, id, episodeNumber } = el
    const img = el.mainImage.asset.fluid.src
    const slug = el.slug.current
    return (
      <RcContactCard
        key={id}
        title={title}
        publishedDate={publishedDate}
        runtime={runtime}
        img={img}
        episodeNumber={episodeNumber}
        slug={slug}
      />
    )
  })

  // Square ContactCard
  const lastThreeCards = allEpisodes.slice(0, 3).map(el => {
    const img = el.mainImage.asset.fluid.src
    const { title, runtime, publishedDate, id, episodeNumber } = el
    const slug = el.slug.current

    return (
      <SqEpisodeCard
        img={img}
        title={title}
        runtime={runtime}
        publishedDate={publishedDate}
        key={id}
        episodeNumber={episodeNumber}
        slug={slug}
      />
    )
  })

  return {
    selected,
    seasonTags,
    episodeList,
    lastThreeCards,
    seasonState,
    updateOrder,
    sortedEpisodes,
    showNumber,
  }
}

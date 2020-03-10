import {
  selectedStateChange,
  seasonDispatch,
  filterEpisodes,
} from "../lib/funcs"
import { createTags } from "../lib/uiCompsDone"

import { useReducer } from "react"
import { starterState, episodeReturner } from "../lib/startingStates"

export function useSeasons(allEpisodes) {
  const startingState = starterState(allEpisodes)

  const [seasonState, dispatch] = useReducer(seasonDispatch, startingState)

  const { selected } = seasonState

  function updateSeason(id, inner) {
    const allSeasonsUpdated = selectedStateChange(id, seasonState)

    dispatch({
      type: "seasonUpdate",
      inner,
      allSeasons: allSeasonsUpdated,
    })
  }

  function updateOrder(order) {
    dispatch({
      type: "orderEpisodes",
      order,
    })
  }
  const {
    episodeList,
    // lastThreeCards,
    sortedEpisodes,
    // allEpisodes,
    // filteredEpisodes,
  } = episodeReturner(allEpisodes, seasonState)

  function showNumber(number, sortedEpisodes) {
    console.log(seasonState)
    dispatch({
      type: "showMore",
      payload: number,
      allEpisodes,
      sortedEpisodes,
    })
  }

  // UI
  const seasonTags = createTags(seasonState, updateSeason)
  const filteredEpisodes = filterEpisodes(allEpisodes, seasonState)

  const lastThreeEpisodes = allEpisodes.slice(0, 3).map(el => {
    return {
      title: el.title,
      episodeNumber: el.episodeNumber,
      publishedDate: el.publishedDate,
      slug: el.slug.current,
      runtime: el.runtime,
      img: el.mainImage.asset.fluid.src,
      fluid: el.mainImage.asset.fluid,
    }
  })

  // console.log("hook", { allEpisodes })
  return {
    selected,
    seasonTags,
    episodeList,
    // lastThreeCards,
    seasonState,
    updateOrder,
    sortedEpisodes,
    showNumber,
    filteredEpisodes,
    allEpisodes,
    lastThreeEpisodes,
  }
}

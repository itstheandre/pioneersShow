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
    lastThreeCards,
    sortedEpisodes,
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

  return {
    selected,
    seasonTags,
    episodeList,
    lastThreeCards,
    seasonState,
    updateOrder,
    sortedEpisodes,
    showNumber,
    filteredEpisodes,
  }
}

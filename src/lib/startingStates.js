import { selectedEverything, filterEpisodes } from "./funcs"
import { createRcContact, createSqContact } from "./uiCompsDone"

export function starterState(allEpisodes) {
  const allSeasons = selectedEverything(allEpisodes)
  const state = { allSeasons, selected: "All", order: "DESC", showNumber: 5 }

  return {
    ...state,
    allEpisodes,
  }
}

export function episodeReturner(allEpisodes, seasonState) {
  const { showNumber } = seasonState

  function sortEpisodes() {
    function asc(a, b) {
      return a.episodeNumber - b.episodeNumber
    }

    function desc(a, b) {
      return b.episodeNumber - a.episodeNumber
    }
    if (allEpisodes.length < 2) return
    if (seasonState.order === "ASC") return asc
    else return desc
  }

  const sortedEpisodes = [...filterEpisodes(allEpisodes, seasonState)]
    .sort(sortEpisodes())
    .slice(0, showNumber)

  const episodeList = createRcContact(sortedEpisodes)
  const lastThreeCards = createSqContact(allEpisodes)

  return { episodeList, lastThreeCards, sortedEpisodes, allEpisodes }
}

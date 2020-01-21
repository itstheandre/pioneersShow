import { selectedEverything } from "./funcs"
import { createRcContact, createSqContact } from "./uiCompsDone"

export function starterState(allEpisodes) {
  const allSeasons = selectedEverything(allEpisodes)

  return { allSeasons, selected: "All", order: "DESC", showNumber: 5 }
}

export function episodeReturner(allEpisodes, seasonState) {
  const { selected, showNumber } = seasonState

  // console.log({ showNumber })

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

  const filteredEpisodes = allEpisodes.filter(episode => {
    return episode.season.some(el => el.title === selected)
  })

  const sortedEpisodes = [...filteredEpisodes]
    .sort(sortEpisodes())
    .slice(0, showNumber)

  // console.log("CUSTOM RETURNER", sortedEpisodes)

  const episodeList = createRcContact(sortedEpisodes)
  const lastThreeCards = createSqContact(allEpisodes)

  return { episodeList, lastThreeCards, sortedEpisodes }
}

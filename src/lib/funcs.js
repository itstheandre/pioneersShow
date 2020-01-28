import { createRcContact, createSqContact } from "./uiCompsDone"

export function selectedEverything(starting) {
  const defaultVal = {
    id: "all",
    state: "selected",
    inner: "All",
  }
  const allSeasons = [
    ...new Set(starting.map(el => el.season[0].title)),
  ].reduce(
    (acc, val) => {
      return [
        ...acc,
        {
          id: val
            .split(" ")
            .join("")
            .toLowerCase(),
          state: "unselected",
          inner: val,
        },
      ]
    },
    [defaultVal]
  )

  return allSeasons
}

export function selectedStateChange(id, seasonState) {
  const newSeasons = [...seasonState.allSeasons]
  newSeasons.forEach(el => {
    if (el.id === id) {
      el.state = "selected"
    } else {
      el.state = "unselected"
    }
  })

  return newSeasons
}

export function seasonDispatch(state, action) {
  switch (action.type) {
    case "seasonUpdate": {
      return { ...state, selected: action.inner, allSeasons: action.allSeasons }
    }
    case "orderEpisodes": {
      return { ...state, order: action.order, showNumber: 3 }
    }
    case "showMore": {
      let addedVal
      const valCheck =
        action.allEpisodes.length - action.sortedEpisodes.length >=
        action.payload

      if (valCheck) {
        addedVal = action.payload
      } else {
        addedVal = action.allEpisodes.length - action.sortedEpisodes.length
      }

      return {
        ...state,
        showNumber: state.showNumber + addedVal,
      }
    }
    default: {
      return
    }
  }
}

export function filterEpisodes(allEpisodes, state) {
  return allEpisodes.filter(episode => {
    return episode.season.some(el => el.title === state.selected)
  })
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

  return { episodeList, lastThreeCards, sortedEpisodes }
}

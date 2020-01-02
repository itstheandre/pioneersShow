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
      return { ...state, order: action.order }
    }
  }
}

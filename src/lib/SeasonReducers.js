export function updateOrder(order) {
  dispatch({
    type: "orderEpisodes",
    order,
  })
}

export function updateSeason(id, inner) {
  const allSeasonsUpdated = selectedStateChange(id, seasonState)

  dispatch({
    type: "seasonUpdate",
    inner,
    allSeasons: allSeasonsUpdated,
  })
}

export function showNumber(number, sortedEpisodes) {
  dispatch({
    type: "showMore",
    payload: number,
    allEpisodes,
    sortedEpisodes,
  })
}

import { useReducer } from "react"
import { useState } from "react"

export const defaultState = [
  { id: "all", state: "selected", inner: "All" },
  { id: "season1", state: "unselected", inner: "Season 1" },
  { id: "season2", state: "unselected", inner: "Season 2" },
  { id: "season3", state: "unselected", inner: "Season 3" },
]

export function useSeasons() {
  const [seasons, setSeasons] = useState(defaultState)

  function updater(id) {
    const newSeasons = [...seasons]
    newSeasons.forEach(el => {
      if (el.id === id) {
        el.state = "selected"
      } else {
        el.state = "unselected"
      }
    })

    setSeasons(newSeasons)
  }

  return { seasons, setSeasons, updater }
}

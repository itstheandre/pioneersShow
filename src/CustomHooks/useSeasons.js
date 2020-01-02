import React, { useState, useEffect } from "react"
import Tags from "../styled/Tags"
import RcContactCard from "../components/Cards/RcContactCard"

/* -------------------------------------------------------------------------- */
/*                         MAIN LOGIN BEHIND THE HOOK                         */
/* -------------------------------------------------------------------------- */

// const uniqueSeasons = [...new Set(allEpisodes.map(el => el.season[0].title))]
// const allSeasons = uniqueSeasons.reduce(
//   (acc, val) => {
//     return [
//       ...acc,
//       {
//         id: val
//           .split(" ")
//           .join("")
//           .toLowerCase(),
//         state: "unselected",
//         inner: val,
//       },
//     ]
//   },
//   [{ id: "all", state: "selected", inner: "All" }]
// )

export const defaultState = [
  { id: "all", state: "selected", inner: "All" },
  { id: "season1", state: "unselected", inner: "Season 1" },
  { id: "season2", state: "unselected", inner: "Season 2" },
  { id: "season3", state: "unselected", inner: "Season 3" },
]

const newDefault = {
  allSeasons: defaultState,
  selected: "All",
}

export function useSeasons(allEpisodes) {
  const allSeasons = [
    ...new Set(allEpisodes.map(el => el.season[0].title)),
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
    [
      {
        id: "all",
        state: "selected",
        inner: "All",
      },
    ]
  )
  // const [seasonState, setSeasons] = useState(newDefault)
  const [seasonState, setSeasons] = useState({
    allSeasons,
    selected: "All",
  })
  const { selected } = seasonState

  function update(id, inner) {
    const allSeasons = updater(id)
    setSeasons({
      allSeasons,
      selected: inner,
    })
  }

  const seasonTags = seasonState.allSeasons.map(el => {
    return (
      <Tags
        key={el.id}
        id={el.id}
        selected={el.state}
        // onClick={() => updater(el.id)}
        onClick={() => update(el.id, el.inner)}
      >
        {el.inner}
      </Tags>
    )
  })
  const filteredEpisodes = allEpisodes.filter(episode => {
    const test = episode.season.some(el => el.title === selected)
    return episode.season.some(el => el.title === selected)
  })

  const episodeList = filteredEpisodes.map(el => {
    console.log(typeof el.publishedDate)
    const { title, publishedDate, runtime, id } = el
    const img = el.mainImage.asset.fluid.src
    return (
      <RcContactCard
        key={id}
        title={title}
        publishedDate={publishedDate}
        runtime={runtime}
        img={img}
      />
    )
  })

  function updater(id) {
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

  return {
    selected,
    seasonTags,
    episodeList,
  }
}
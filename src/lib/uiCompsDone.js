import React from "react"
import Tags from "../styled/Tags"
import RcContactCard from "../components/Cards/RcContactCard"
import SqEpisodeCard from "../components/Cards/SqEpisodeCard"

export function createTags({ allSeasons }, updateSeason) {
  return allSeasons.map(el => {
    return (
      <Tags
        key={el.id}
        id={el.id}
        selected={el.state}
        onClick={() => updateSeason(el.id, el.inner)}
      >
        {el.inner}
      </Tags>
    )
  })
}

export function createRcContact(sortedEpisodes) {
  return sortedEpisodes.map(el => {
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
}

export function createSqContact(allEpisodes) {
  return allEpisodes.slice(0, 3).map(el => {
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
}

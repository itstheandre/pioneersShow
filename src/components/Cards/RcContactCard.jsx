import React from "react"
import {
  EpisodeSection,
  EpisodeOverlay,
  EpisodeImage,
  EpisodeBody,
  RqEpisodeDescription,
  RqEpisodeTitle,
  IconOverlay,
} from "../../styled/RecContactCard"

import { Link } from "gatsby"
import { GatsbyCleanup } from "../../styled/GatsbyCleanup"

const RcContactCard = props => {
  const { img, title, runtime, episodeNumber, publishedDate, slug } = props

  console.log(typeof episodeNumber)

  return (
    // <G to={`/${slug}`}>
    <GatsbyCleanup>
      <Link to={`/${slug}`}>
        <EpisodeSection>
          {/* <IconOverlay img={elipse}> */}
          <EpisodeImage img={img}>
            <EpisodeOverlay />
          </EpisodeImage>
          {/* </IconOverlay> */}
          <EpisodeBody>
            <RqEpisodeDescription>
              {runtime}m | {publishedDate}
            </RqEpisodeDescription>
            <RqEpisodeTitle>
              #{episodeNumber < 10 ? 0 : ""}
              {episodeNumber} - {title}
            </RqEpisodeTitle>
          </EpisodeBody>
        </EpisodeSection>
      </Link>
    </GatsbyCleanup>
  )
}

export default RcContactCard

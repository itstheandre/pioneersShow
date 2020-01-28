import React from "react"
import {
  EpisodeSection,
  EpisodeOverlay,
  EpisodeImage,
  EpisodeBody,
  RqEpisodeDescription,
  RqEpisodeTitle,
  // IconOverlay,
} from "../../styled/RecContactCard"

import { Link } from "gatsby"

const RcContactCard = props => {
  const { img, title, runtime, episodeNumber, publishedDate, slug } = props

  return (
    // <G to={`/${slug}`}>
    // <Link to={`/${slug}`}>
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
          #{episodeNumber} - {title}
        </RqEpisodeTitle>
      </EpisodeBody>
    </EpisodeSection>
    //{/* </Link> */}
  )
}

export default RcContactCard

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

const RcContactCard = ({ img, title, runtime, publishedDate }) => {
  return (
    <EpisodeSection>
      {/* <IconOverlay img={elipse}> */}
      <EpisodeOverlay>
        <EpisodeImage img={img} />
      </EpisodeOverlay>
      {/* </IconOverlay> */}
      <EpisodeBody>
        <RqEpisodeDescription>
          {runtime} | {publishedDate}
        </RqEpisodeDescription>
        <RqEpisodeTitle>{title}</RqEpisodeTitle>
      </EpisodeBody>
    </EpisodeSection>
  )
}

export default RcContactCard

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

const RcContactCard = ({
  img,
  title,
  runtime,
  episodeNumber,
  publishedDate,
}) => {
  return (
    <EpisodeSection>
      {/* <IconOverlay img={elipse}> */}
      <EpisodeOverlay>
        <EpisodeImage img={img} />
      </EpisodeOverlay>
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
  )
}

export default RcContactCard

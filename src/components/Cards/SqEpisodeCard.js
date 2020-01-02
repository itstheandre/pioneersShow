import React from "react"
import {
  ContentSection,
  ContentImage,
  ContentOverlay,
  ContentBody,
  EpisodeTitle,
  EpisodeDescription,
  SquareWrapper,
} from "../../styled/SqContentCard"

const EpisodeCard = ({ img, title, episodeNumber, runtime, publishedDate }) => {
  return (
    // <SquareWrapper>
    <ContentSection>
      <ContentImage img={img}>
        <ContentOverlay />
      </ContentImage>
      <ContentBody>
        <EpisodeDescription>
          {runtime}m | {publishedDate}
        </EpisodeDescription>
        <EpisodeTitle>
          #{episodeNumber} - {title}
        </EpisodeTitle>
      </ContentBody>
    </ContentSection>
    // </SquareWrapper>
  )
}

export default EpisodeCard

import React from "react"
import {
  ContentSection,
  ContentImage,
  ContentOverlay,
  ContentBody,
  EpisodeTitle,
  EpisodeDescription,
} from "../../styled/SqContentCard"
import { Link } from "gatsby"

const EpisodeCard = ({
  img,
  title,
  episodeNumber,
  runtime,
  publishedDate,
  slug,
}) => {
  return (
    // <SquareWrapper>
    // <Link to={`/${slug}`}>
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
    // {/* </Link> */}
    // </SquareWrapper>
  )
}

export default EpisodeCard

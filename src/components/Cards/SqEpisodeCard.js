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
import { Link } from "gatsby"
import { GatsbyCleanup } from "../../styled/GatsbyCleanup"

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
    <GatsbyCleanup>
      <Link to={`/${slug}`}>
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
      </Link>
    </GatsbyCleanup>
    // </SquareWrapper>
  )
}

export default EpisodeCard

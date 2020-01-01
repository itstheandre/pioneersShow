import React from "react"
import {
  ContentSection,
  ContentImage,
  ContentOverlay,
  ContentBody,
  EpisodeTitle,
  EpisodeDescription,
} from "../../styled/SqContentCard"

const EpisodeCard = ({ img, title }) => {
  return (
    <ContentSection>
      <ContentImage img={img}>
        <ContentOverlay />
      </ContentImage>
      <ContentBody>
        <EpisodeDescription>Test</EpisodeDescription>
        <EpisodeTitle>{title}</EpisodeTitle>
      </ContentBody>
    </ContentSection>
  )
}

export default EpisodeCard

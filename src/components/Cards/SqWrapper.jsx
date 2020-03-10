import React from "react"
import { EpisodeWrapper, EpisodeWrap } from "../../styled/SqContentCard"
import { MainH2, HomeBodyText, TestH2 } from "../../styled/Titles"
import { LetterImg } from "../../utils/image-loader"
import {
  HomeIcon,
  IconWrapper,
  FlexedHomePagePart,
} from "../../styled/S_HomePage"
import { Button } from "../../styled/Buttons"
import { Link } from "gatsby"
import SqEpisodeCard from "./SquareEpisodeCard"
const SqWrapper = ({ lastThreeEpisodes }) => {
  return (
    <>
      <FlexedHomePagePart>
        <TestH2>Latest Episodes</TestH2>
        <Link to="/episodes">
          <Button styleType="secondary">See all</Button>
        </Link>
      </FlexedHomePagePart>
      <EpisodeWrap>
        {lastThreeEpisodes.map(el => (
          <SqEpisodeCard episodeInfo={el} />
        ))}
      </EpisodeWrap>
      {/* <EpisodeWrapper>{lastThreeCards}</EpisodeWrapper> */}
      <IconWrapper>
        <HomeIcon src={LetterImg} alt="Letter" />
        <TestH2>We'd Love to Hear From You</TestH2>
        <HomeBodyText>
          If you have any idea for an episode, want to be a participant in the
          show, or any other general inquiries, fill the form and we’ll try to
          get back to you.
        </HomeBodyText>
        <Link to="/contact">
          <Button type="submit" styleType="secondary">
            Let's talk
          </Button>
        </Link>
      </IconWrapper>
    </>
  )
}

export default SqWrapper

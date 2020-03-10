import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import {
  HomePageHero,
  HomePageHeroText,
  HeroH1,
  PageLayout,
} from "../../styled/S_HomePage"
import { HomePageBG } from "../../utils/image-loader"
import { useSeasons } from "../../CustomHooks/useSeasons"
import SqWrapper from "../Cards/SqWrapper"
import { LayoutWrapper } from "../../styled/LayoutWrapper"
import { SeeAllButton } from "../../styled/Buttons"
import { Link } from "gatsby"

const IndexPageComp = ({ allEpisodes }) => {
  const { ref } = useWrapper()
  const { lastThreeCards, lastThreeEpisodes } = useSeasons(allEpisodes)
  console.log({ lastThreeEpisodes })
  return (
    <>
      <HomePageHero ref={ref} img={HomePageBG}>
        <LayoutWrapper>
          <HomePageHeroText>
            <HeroH1>Real conversations with the pioneers of today</HeroH1>
            <Link to="/episodes">
              <SeeAllButton styleType="primary">
                Listen to new episode
              </SeeAllButton>
            </Link>
          </HomePageHeroText>
        </LayoutWrapper>
      </HomePageHero>
      <LayoutWrapper>
        <SqWrapper
          // lastThreeCards={lastThreeCards}
          lastThreeEpisodes={lastThreeEpisodes}
        />
      </LayoutWrapper>
    </>
  )
}

export default IndexPageComp

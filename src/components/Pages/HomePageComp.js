import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import { HomePageHero, HomePageHeroText, HeroH1 } from "../../styled/S_HomePage"
import { HomePageBG } from "../../utils/image-loader"
import { useSeasons } from "../../CustomHooks/useSeasons"
import SqWrapper from "../Cards/SqWrapper"
import { LayoutWrapper } from "../../styled/LayoutWrapper"
import { Button } from "../../styled/Buttons"

const IndexPageComp = ({ allEpisodes }) => {
  const { ref } = useWrapper()
  const { lastThreeCards } = useSeasons(allEpisodes)
  return (
    <>
      <HomePageHero ref={ref} img={HomePageBG}>
        <LayoutWrapper>
          <HomePageHeroText>
            <HeroH1>Real conversations with  the pioneers of today</HeroH1>
            <Button type="primary">Listen to new episode</Button>
          </HomePageHeroText>
        </LayoutWrapper>
      </HomePageHero>
      <LayoutWrapper>
        <SqWrapper lastThreeCards={lastThreeCards} />
      </LayoutWrapper>
    </>
  )
}

export default IndexPageComp

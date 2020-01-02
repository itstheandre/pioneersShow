import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import { HomePageHero } from "../../styled/S_HomePage"
import { HomePageBG } from "../../utils/image-loader"
import { useSeasons } from "../../CustomHooks/useSeasons"
import { SquareWrapper } from "../../styled/SqContentCard"

const IndexPageComp = ({ allEpisodes }) => {
  const { ref } = useWrapper()
  // const { lastThreeCards } = useSeasons(allEpisodes)
  return (
    <>
      <HomePageHero ref={ref} img={HomePageBG}></HomePageHero>
      <div
        style={{
          height: "500px",
          backgroundColor: "grey",
        }}
      >
        Hi there
      </div>
      <div style={{ height: "200px", backgroundColor: "blue" }}>Hi there</div>
      {/* <SqWrapper lastThreeCards={lastThreeCards} /> */}
      <div style={{ height: "200px", backgroundColor: "red" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "green" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "oRANGE" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "yellow" }}>Hi there</div>
    </>
  )
}

export default IndexPageComp

import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import { HomePageHero } from "../../styled/S_HomePage"
import { HomePageBG } from "../../utils/image-loader"

const IndexPageComp = () => {
  const { ref } = useWrapper()
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
      <div style={{ height: "200px", backgroundColor: "red" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "green" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "oRANGE" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "yellow" }}>Hi there</div>
    </>
  )
}

export default IndexPageComp

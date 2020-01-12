import React from "react"
import MyNavBar from "../components/navigation/NavTest"
import { useWrapper } from "../Context/WrapperContext"
import { ContentWrapper } from "../styled/S_Layout"

const Playing = () => {
  const { ref } = useWrapper()
  return (
    <>
      <ContentWrapper>
        <MyNavBar />
      </ContentWrapper>
      <div style={{ height: "20vh", backgroundColor: "red" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "blue" }} ref={ref}>
        Hi
      </div>
      <div style={{ height: "20vh", backgroundColor: "yellow" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "red" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "blue" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "yellow" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "red" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "blue" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "yellow" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "red" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "blue" }}>Hi</div>
      <div style={{ height: "20vh", backgroundColor: "yellow" }}>Hi</div>
    </>
  )
}

export default Playing

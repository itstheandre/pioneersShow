import React from "react"
import { useWrapper } from "../../Context/WrapperContext"

const TeamPageComp = () => {
  const { ref } = useWrapper()
  return (
    <div>
      <div
        ref={ref}
        style={{
          height: "500px",
          backgroundColor: "red",
        }}
      >
        Hi there
      </div>
      <div style={{ height: "200px", backgroundColor: "grey" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "blue" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "purple" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "yellow" }}>Hi there</div>
      <div style={{ height: "200px", backgroundColor: "black" }}>Hi there</div>
    </div>
  )
}

export default TeamPageComp

import React from "react"
import styled from "styled-components"

const NavMobile = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(30, 51, 89, 0.97);
  @media screen and (max-width: 375px) {
    height: 80vh;
  }
`

const Mobile = () => {
  return (
    <div>
      <NavMobile></NavMobile>
    </div>
  )
}

export default Mobile

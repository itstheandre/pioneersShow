import React, { useState, useEffect } from "react"
// import { pioneersColorLogo, pioneersWhiteLogo } from "../../utils/image-loader"
// import { Link } from "gatsby"
// import { useWrapper } from "../../Context/WrapperContext"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import styled from "styled-components"
import GlobalStyle from "../../styled/GlobalStyle"
import { useWrapper } from "../../Context/WrapperContext"

const MyNavTest = styled.nav`
  /* position: fixed;
  width: 100vw;
  height: 12rem; */
  /* background-color: blue; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

const MyNavBar = () => {
  const [displayMobile, setDisplayMobile] = useState(false)
  const { inView } = useWrapper()

  useEffect(() => {
    function checkAndAutoHide() {
      const screen = window.innerWidth
      if (displayMobile && screen > 768) {
        console.log("oi?")
        setDisplayMobile(false)
      }
    }
    window.addEventListener("resize", checkAndAutoHide)

    return () => window.removeEventListener("resize", checkAndAutoHide)
  }, [displayMobile])

  function toggle() {
    setDisplayMobile(!displayMobile)
  }

  return (
    <>
      <GlobalStyle />
      <MyNavTest>
        <Desktop
          toggle={toggle}
          displayMobile={displayMobile}
          inView={inView}
        />
        <Mobile displayMobile={displayMobile} toggle={toggle} />
      </MyNavTest>
    </>
  )
}

export default MyNavBar

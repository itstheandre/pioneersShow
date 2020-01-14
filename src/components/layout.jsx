import React from "react"
// import Navbar from "./Navbar"
// import "./layout.css"
import { Body, ContentWrapper } from "../styled/S_Layout"
import logos from "../lib/logos"
import BottomArea from "./Footer/BottomArea"
import GlobalStyle from "../styled/GlobalStyle"
import MyNavBar from "./navigation/NavTest"

// Bold
// Extra Bold
// Regular

const Layout = props => {
  // function toggle() {
  //   setDisplayMobile(!displayMobile)
  // }

  return (
    <div className="app">
      <GlobalStyle />
      <Body>
        <ContentWrapper>
          <MyNavBar />
          {props.children}
        </ContentWrapper>
        <BottomArea logos={logos} />
      </Body>
    </div>
  )
}

export default Layout

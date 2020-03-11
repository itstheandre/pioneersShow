import React from "react"
// import Navbar from "./Navbar"
// import "./layout.css"
import { Body, ContentWrapper } from "../styled/S_Layout"
import logos from "../lib/logos"
import BottomArea from "./Footer/BottomArea"
import GlobalStyle from "../styled/GlobalStyle"
import MyNavBar from "./navigation/NavTest"
import { LayoutWrapper } from "../styled/LayoutWrapper"
import Meta from "./Meta"

// Bold
// Extra Bold
// Regular

const Layout = ({ children }) => {
  // function toggle() {
  //   setDisplayMobile(!displayMobile)
  // }

  return (
    <div className="app">
      <GlobalStyle />
      <Meta />
      <Body>
        <ContentWrapper>
          <MyNavBar />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ContentWrapper>
        <BottomArea logos={logos} />
      </Body>
    </div>
  )
}

export default Layout

import React from "react"
import Navbar from "./Navbar"
import { Body, ContentWrapper } from "../styled/S_Layout"
import { Helmet } from "react-helmet"
import logos from "../lib/logos"
import BottomArea from "./Footer/BottomArea"
import styled, { createGlobalStyle } from "styled-components"

const Layout = props => {
  return (
    <div className="app">
      <GlobalStyle />
      <Helmet>
        <title>Test</title>
      </Helmet>
      <Body>
        <ContentWrapper>
          <Navbar />
          {props.children}
        </ContentWrapper>
        <BottomArea logos={logos} />
      </Body>
    </div>
  )
}

export default Layout

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 8px;
  --lora: Lora, "serif";
  --tt: TTInterphases-Regular, Lato, sans-serif
}

body {
  font-family: var(--tt)
}

.p {
  font-family: var(--lora)
}
`

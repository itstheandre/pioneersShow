import styled from "styled-components"
import React from "react"
import GlobalStyle from "../styled/GlobalStyle"

const LayoutMobile2 = styled.div`
  margin: 0;
  padding: 0;
`

const Layout2 = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutMobile2>{children}</LayoutMobile2>
    </>
  )
}

export default Layout2

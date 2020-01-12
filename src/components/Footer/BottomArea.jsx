import React from "react"
import AboveFooterComp from "./AboveFooter"
import Footer from "./Footer"
import { LayoutWrapper } from "../../styled/LayoutWrapper"

const BottomArea = ({ logos }) => {
  return (
    <>
      <LayoutWrapper>
        <AboveFooterComp logos={logos} />
      </LayoutWrapper>
      <Footer />
    </>
  )
}

export default BottomArea

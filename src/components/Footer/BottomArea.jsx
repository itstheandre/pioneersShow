import React from "react"
import AboveFooterComp from "./AboveFooter"
import Footer from "./Footer"

const BottomArea = ({ logos }) => {
  return (
    <>
      <AboveFooterComp logos={logos} />
      <Footer />
    </>
  )
}

export default BottomArea

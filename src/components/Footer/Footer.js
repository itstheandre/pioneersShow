import React from "react"
import { FooterComponent, Caption, StayConnected } from "../../styled/S_Layout"
import FooterContent from "./FooterContent"

const Footer = props => {
  return (
    <>
      <FooterComponent>
        <StayConnected>Stay Connected</StayConnected>
        <FooterContent />
        <Caption>Copyright by Pioneers Show - 2019</Caption>
      </FooterComponent>
    </>
  )
}

export default Footer

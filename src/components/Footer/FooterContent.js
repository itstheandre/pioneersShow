import React from "react"
import { FooterLogos } from "../../styled/S_Layout"
import {
  instagramLogo,
  linkedInLogo,
  twitterLogo,
} from "../../utils/image-loader"

const FooterContent = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <FooterLogos src={instagramLogo} />
        <FooterLogos src={linkedInLogo} />
        <FooterLogos src={twitterLogo} />
      </div>
    </>
  )
}

export default FooterContent

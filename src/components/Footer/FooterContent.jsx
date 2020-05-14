import React from "react"
import { FooterLogos } from "../../styled/S_Layout"
import {
  instagramLogo,
  linkedInLogo,
  twitterLogo,
} from "../../utils/image-loader"
import styled from "styled-components"

const FooterLogosWrapper = styled.div`
  display: flex;

  a {
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: transform 10ms ease-in-out;
    }
  }
`

const FooterContent = () => {
  return (
    <>
      <FooterLogosWrapper style={{ display: "flex" }}>
        <a
          href="https://www.instagram.com/pioneersshow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLogos src={instagramLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/itstheandre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLogos src={linkedInLogo} />
        </a>
        <a
          href="https://www.twitter.com/itstheandre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLogos src={twitterLogo} />
        </a>
      </FooterLogosWrapper>
    </>
  )
}

// ;<a href={link} target="_blank" rel="noopener noreferrer">
//   <img src={img} alt={key} />
// </a>

export default FooterContent

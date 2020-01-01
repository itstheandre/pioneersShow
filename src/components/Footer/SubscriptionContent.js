import React from "react"
import { SubscriptionDiv } from "../../styled/FooterStyled"

const SubscriptionContent = ({ img, link, key }) => {
  return (
    <SubscriptionDiv>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={key} />
      </a>
    </SubscriptionDiv>
  )
}

export default SubscriptionContent

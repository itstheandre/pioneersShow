import React from "react"
import {
  SubscriptionDiv,
  AboveParent,
  LogosWrapper,
  AboveBody,
} from "../../styled/FooterStyled"
import SubscriptionContent from "./SubscriptionContent"
import { MainH2, TestH2 } from "../../styled/Titles"

const AboveFooterComp = ({ logos }) => {
  return (
    <>
      <AboveParent>
        <AboveBody>
          <TestH2>Subscribe for new episodes</TestH2>
          <LogosWrapper>
            {logos.map(image => {
              return (
                <SubscriptionDiv key={image.name}>
                  <SubscriptionContent img={image.img} link={image.link} />
                </SubscriptionDiv>
              )
            })}
          </LogosWrapper>
        </AboveBody>
      </AboveParent>
    </>
  )
}

export default AboveFooterComp

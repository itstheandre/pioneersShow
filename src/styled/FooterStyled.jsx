import styled from "styled-components"

// SUBSCRIBE

// Dark Footer

const FooterComponent = styled.footer`
  padding-top: 4rem;
  background-color: #1d273a;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`

const FooterLogos = styled.img`
  padding: 1rem 3rem;
`

const Caption = styled.p`
  font-size: 1.5rem;
  padding: 4rem;
`

const StayConnected = styled.h4`
  padding: 4rem;
  font-size: 2.25rem;
`

const AboveParent = styled.div`
  display: flex;
  justify-content: center;
  margin: 15rem 0;
`

const AboveBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
`

const SubscriptionDiv = styled.div`
  padding: 0 2.5em;
  & img {
    height: 100%;
  }
`

export {
  FooterComponent,
  FooterLogos,
  StayConnected,
  Caption,
  LogosWrapper,
  SubscriptionDiv,
  AboveParent,
  AboveBody,
}

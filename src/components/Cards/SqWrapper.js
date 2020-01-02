import React from "react"
import { SquareWrapper } from "../../styled/SqContentCard"
import { MainH2, HomeBodyText } from "../../styled/Titles"
import { LetterImg } from "../../utils/image-loader"
import { HomeIcon, IconWrapper } from "../../styled/S_HomePage"
import { Button } from "../../styled/Buttons"

const SqWrapper = ({ lastThreeCards }) => {
  return (
    <>
      <MainH2>Latest Episodes </MainH2>
      <SquareWrapper>{lastThreeCards}</SquareWrapper>
      <IconWrapper>
        <HomeIcon src={LetterImg} alt="Letter" />
        <MainH2>We'd Love to Hear From You</MainH2>
        <HomeBodyText>
          If you have any idea for an episode, want to be a participant in the
          show, or any other general inquiries, fill the form and we’ll try to
          get back to you.
        </HomeBodyText>
        <Button type="submit" styleType="secondary">
          Let's talk
        </Button>
      </IconWrapper>
    </>
  )
}

export default SqWrapper

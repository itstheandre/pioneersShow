import React from "react"
import {
  ContactHero,
  ContactBody,
  ContactText,
} from "../../styled/S_ContactPage"
import { UpperCased, MainHeroTitle } from "../../styled/Titles"
import { ContactPageBG } from "../../utils/image-loader"
import { useWrapper } from "../../Context/WrapperContext"
import ContactForm from "../Contact/ContactForm"
import { LayoutWrapper } from "../../styled/LayoutWrapper"

const ContactPageComp = () => {
  const { ref } = useWrapper()
  return (
    <>
      <ContactHero ref={ref} img={ContactPageBG}>
        <LayoutWrapper>
          <UpperCased>Contact</UpperCased>
          <MainHeroTitle>We'd love to hear from you! </MainHeroTitle>
        </LayoutWrapper>
      </ContactHero>
      <ContactBody>
        <ContactText>
          If you have any idea for an episode, want to be a participant in the
          show, or just want to discuss with us how Pink Floyd is the greatest
          band of all time, fill this form and we’ll get back to you as soon as
          possible.
        </ContactText>
        <ContactForm />
      </ContactBody>
    </>
  )
}

export default ContactPageComp

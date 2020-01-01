import React from "react"
import {
  Label,
  SInput,
  MInput,
  LInput,
  LInpCont,
  FormContainer,
  IndInpCont,
} from "../../styled/Forms"

const ContactForm = () => {
  return (
    <>
      <form>
        <FormContainer>
          <IndInpCont>
            <Label htmlFor="name">Name*</Label>
            <SInput type="text" placeholder="Your street name" id="name" />
          </IndInpCont>
          <IndInpCont>
            <Label htmlFor="email">Email*</Label>
            <SInput
              type="email"
              placeholder="Your digital address"
              id="email"
            />
          </IndInpCont>
        </FormContainer>
        <FormContainer>
          <IndInpCont>
            <Label htmlFor="subject">Subject</Label>
            <MInput
              type="text"
              placeholder="If you had to explain your message in one sentence"
              id="subject"
            />
          </IndInpCont>
        </FormContainer>
        <FormContainer>
          <LInpCont>
            <Label htmlFor="message">Message</Label>
            <LInput placeholder="Say Hello" type="textarea" id="message" />
          </LInpCont>
        </FormContainer>
      </form>
    </>
  )
}

export default ContactForm

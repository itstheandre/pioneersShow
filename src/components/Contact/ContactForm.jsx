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
import { Button } from "../../styled/Buttons"
// import { LayoutWrapper } from "../../styled/LayoutWrapper"

const ContactForm = () => {
  return (
    <>
      <form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {" "}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <FormContainer>
          <IndInpCont>
            <Label htmlFor="name">Name*</Label>
            <SInput
              type="text"
              placeholder="Your street name"
              id="name"
              name="name"
            />
          </IndInpCont>
          <IndInpCont>
            <Label htmlFor="email">Email*</Label>
            <SInput
              type="email"
              placeholder="Your digital address"
              id="email"
              name="email"
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
              name="subject"
            />
          </IndInpCont>
        </FormContainer>
        <FormContainer>
          <LInpCont>
            <Label htmlFor="message">Message</Label>
            <LInput
              placeholder="Say Hello"
              type="textarea"
              id="message"
              name="message"
            />
          </LInpCont>
        </FormContainer>
        <Button styleType="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default ContactForm

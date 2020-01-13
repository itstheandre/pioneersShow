import React, { useState, useEffect } from "react"
import {
  Label,
  SInput,
  MInput,
  LInput,
  LInpCont,
  FormContainer,
  IndInpCont,
  TargetContainer,
  Form,
} from "../../styled/Forms"
import { Button } from "../../styled/Buttons"
// import { LayoutWrapper } from "../../styled/LayoutWrapper"

const ContactForm = () => {
  const [subject, setSubject] = useState(false)

  useEffect(() => {
    function checkAndAutoHide() {
      const screen = window.innerWidth
      if (screen > 900) {
        console.log("oi?")
        setSubject(true)
      }
    }
    window.addEventListener("resize", checkAndAutoHide)

    return () => window.removeEventListener("resize", checkAndAutoHide)
  }, [subject])

  const subjectText = subject
    ? "What's the subject of your message?"
    : "If you had to explain your message in one sentence"

  return (
    <>
      <Form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {" "}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <TargetContainer>
          <IndInpCont>
            <Label htmlFor="name">Name*</Label>
            <SInput type="text" placeholder="Your name" id="name" name="name" />
          </IndInpCont>
          <IndInpCont>
            <Label htmlFor="email">Email*</Label>
            <SInput
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
            />
          </IndInpCont>
        </TargetContainer>
        <FormContainer>
          <IndInpCont>
            <Label htmlFor="subject">Subject</Label>
            <MInput
              type="text"
              placeholder={subjectText}
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
      </Form>
    </>
  )
}

export default ContactForm

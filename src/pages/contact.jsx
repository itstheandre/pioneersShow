import React, { useEffect } from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Meta from "../components/Meta"
import { PageLayout } from "../styled/PageLayout"
import { useWrapper } from "../Context/WrapperContext"
import BgImg from "gatsby-background-image"
import { LayoutWrapper } from "../styled/LayoutWrapper"
import { StyledForm } from "../styled/Forms"
import { useState } from "react"
import { Button } from "../styled/Buttons"

const ContactPage = ({ data }) => {
  const [{ node: contactPage }] = data.allSanityPage.edges
  const { ref } = useWrapper()

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
    <Layout>
      <Meta title={`Pioneers Show ${contactPage.title}`} />
      <PageLayout>
        <div className="header" ref={ref}>
          <BgImg
            fluid={contactPage.pageImage.asset.fluid}
            className="hero"
            Tag="div"
            backgroundColor={"#1e3359"}
          >
            <LayoutWrapper>
              <div className="upperCased">Contact</div>
              <div className="secondaryHeader">
                We'd love to hear from you!{" "}
              </div>
            </LayoutWrapper>
          </BgImg>
        </div>
        <LayoutWrapper>
          <div className="contactBody">
            <p>
              If you have any idea for an episode, want to be a participant in
              the show, or just want to discuss with us how Pink Floyd is the
              greatest band of all time, fill this form and we’ll get back to
              you as soon as possible.
            </p>
            <StyledForm
              name="contact"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="container target">
                <div className="individualInput">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="smallInput"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="individualInput">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="smallInput"
                    placeholder="Your email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="container">
                <div className="individualInput">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    className="smallInput mediumInput"
                    placeholder={subjectText}
                    name="subject"
                    id="text"
                    required
                  />
                </div>
              </div>
              <div className="container">
                <div className="largeContainer">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="largeInput"
                    placeholder="Say Hello"
                    type="textarea"
                    id="message"
                    name="message"
                    required
                  />
                </div>
              </div>
              <Button styleType="primary" type="submit">
                Submit
              </Button>
            </StyledForm>
          </div>
        </LayoutWrapper>
      </PageLayout>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPage {
    allSanityPage(filter: { title: { in: "Contact Page" } }) {
      edges {
        node {
          title

          pageImage {
            asset {
              fluid {
                src
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

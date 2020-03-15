import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Meta from "../components/Meta"
import { PageLayout } from "../styled/PageLayout"
import { useWrapper } from "../Context/WrapperContext"
import BgImg from "gatsby-background-image"
import { LayoutWrapper } from "../styled/LayoutWrapper"

const AboutPage = ({ data }) => {
  const [{ node: aboutPage }] = data.allSanityPage.edges
  const { ref } = useWrapper()
  return (
    <Layout>
      <Meta title={`Pioneers Show ${aboutPage.title}`} />
      <PageLayout>
        <div className="header" ref={ref}>
          <BgImg
            fluid={aboutPage.pageImage.asset.fluid}
            className="hero"
            Tag="div"
            backgroundColor={"#1e3359"}
          >
            <LayoutWrapper>
              <div className="upperCased">About</div>
              <div className="secondaryHeader">
                Do you know what you want to do when you “grow up”?
              </div>
            </LayoutWrapper>
          </BgImg>
        </div>
        <section className="aboutBody">
          <div className="content">
            <p>
              {" "}
              This question haunts millions people all over the world, no matter
              what country, education or even age. Figuring out a purpose is
              hard for a lot of people, so follow along the interviews and
              conversation to figure out how these people did exactly that - or
              are still doing.
            </p>
            <p>
              {" "}
              The Pioneers Show is a podcast that displays real conversations
              with innovators, entrepreneurs, makers, and thinkers about how to
              develop the best life one can have. Learn about different career
              paths, different industries, technologies, and try to take some of
              the blurry information that there is out there about these topics.
            </p>
            <p>
              Every week we try to bring fresh different perspectives on how to
              build your dream career.
            </p>
            <p>
              {" "}
              Entrepreneurship, Intrapreneurship, Innovation are just one type
              of path that you can try.
            </p>
          </div>
        </section>
      </PageLayout>
      {/* <AboutPageComp /> */}
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPage {
    allSanityPage(filter: { title: { in: "About Page" } }) {
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

import React from "react"
import Layout from "../components/layout"

import { LayoutWrapper } from "../styled/LayoutWrapper"
import BgImg from "gatsby-background-image"
import Img from "gatsby-image"

import { useWrapper } from "../Context/WrapperContext"
import { Link } from "gatsby"
import { SeeAllButton, Button } from "../styled/Buttons"
import { TestH2 } from "../styled/Titles"
import { EpisodeWrap } from "../styled/ContentCard"
import { useSeasons } from "../CustomHooks/useSeasons"
import SqEpisodeCard from "../components/Cards/SquareEpisodeCard"
import { PageLayout } from "../styled/PageLayout"

const IndexPage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )

  const { lastThreeEpisodes } = useSeasons(allEpisodes)

  const [{ node: homePage }] = data.allSanityPage.edges

  console.log(homePage)
  const { ref } = useWrapper()

  return (
    <Layout>
      <PageLayout homePage>
        <div className="header" ref={ref}>
          <BgImg
            fluid={homePage.pageImage.asset.fluid}
            className="hero"
            Tag="div"
            backgroundColor={"#1e3359"}
          >
            <LayoutWrapper>
              <div className="heroText">
                <h1>Real Conversations with the pioneers of today</h1>
                <Link to="/episodes">
                  <SeeAllButton styleType="primary">
                    Listen to new episode
                  </SeeAllButton>
                </Link>
              </div>
            </LayoutWrapper>
          </BgImg>
        </div>

        <div className="flexed">
          <h2>Latest Episodes</h2>
          <Link to="/episodes">
            <Button styleType="secondary">See all</Button>
          </Link>
        </div>
        <EpisodeWrap>
          {lastThreeEpisodes.map(el => (
            <SqEpisodeCard episodeInfo={el} />
          ))}
        </EpisodeWrap>
        <div className="iconWrapper">
          {/* <BgImg
            fluid={homePage.letterIcon.asset.fluid}
            Tag="div"
            className="icon"
          /> */}
          <Img fluid={homePage.letterIcon.asset.fluid} />
          <img src={homePage.letterIcon.asset.fluid.src} />
          <h2>We'd Love to Hear From You</h2>
          <div className="homeBody">
            If you have any idea for an episode, want to be a participant in the
            show, or any other general inquiries, fill the form and we’ll try to
            get back to you.
          </div>
        </div>
      </PageLayout>

      {/* <HomePageComp allEpisodes={allEpisodes} /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
    allSanityPage(filter: { title: { in: "Home Page" } }) {
      edges {
        node {
          title
          letterIcon {
            asset {
              fluid {
                src
                ...GatsbySanityImageFluid
              }
            }
          }
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
    allSanityEpisode(sort: { fields: episodeNumber, order: DESC }) {
      edges {
        node {
          id
          title
          runtime
          publishedDate
          episodeNumber
          mainImage {
            asset {
              fluid {
                src
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
          season {
            title
          }
        }
      }
    }
  }
`

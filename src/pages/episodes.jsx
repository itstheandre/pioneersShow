import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Meta from "../components/Meta"
import BgImg from "gatsby-background-image"
import { PageLayout } from "../styled/PageLayout"
import { LayoutWrapper } from "../styled/LayoutWrapper"
import { useWrapper } from "../Context/WrapperContext"
import { useSeasons } from "../CustomHooks/useSeasons"
import { DifButton } from "../styled/Buttons"
import RcContactCard from "../components/Cards/RcContactCard"

const EpisodePage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )

  const {
    seasonTags,
    filteredEpisodes,
    sortedEpisodes,
    showNumber,
    sorted,
  } = useSeasons(allEpisodes)

  console.log({ sorted })

  const lengthCheck = filteredEpisodes.length - sortedEpisodes.length

  const [{ node: episodePage }] = data.allSanityPage.edges
  const { ref } = useWrapper()

  console.log({ episodePage })

  return (
    <Layout>
      <Meta title={`${episodePage.title}`} />
      <PageLayout>
        <div className="header" ref={ref}>
          <BgImg
            fluid={episodePage.pageImage.asset.fluid}
            className="hero"
            Tag="div"
            backgroundColor={"#1e3359"}
          >
            <LayoutWrapper>
              <div className="upperCased">Episodes</div>
              <div className="secondaryHeader">
                Have a listen to the podcast episodes
              </div>
            </LayoutWrapper>
          </BgImg>
        </div>

        <LayoutWrapper>
          <div className="episodeBody">
            <h2>Episodes</h2>
            <div className="tags">{seasonTags}</div>
            <div className="wholeList">
              {sorted.map(el => (
                <RcContactCard episodeInfo={el} />
              ))}
            </div>
            {lengthCheck ? (
              <DifButton
                styleType="secondary"
                onClick={() => showNumber(2, sortedEpisodes)}
              >
                Load More
              </DifButton>
            ) : (
              ""
            )}
          </div>
        </LayoutWrapper>
      </PageLayout>
    </Layout>
  )
}

export default EpisodePage

export const query = graphql`
  query EpisodePage {
    allSanityPage(filter: { title: { in: "Episode Page" } }) {
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
    allSanityEpisode(sort: { fields: episodeNumber, order: DESC }) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              fluid {
                src
                ...GatsbySanityImageFluid
              }
            }
          }
          season {
            title
          }
          slug {
            current
          }
          publishedDate
          runtime
          episodeNumber
        }
      }
    }
  }
`

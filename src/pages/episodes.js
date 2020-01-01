import React from "react"
import Layout from "../components/layout"
import EpisodePageComp from "../components/Pages/EpisodePageComp"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allSanityEpisode {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              fluid {
                src
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
        }
      }
    }
  }
`

const EpisodePage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )
  return (
    <Layout>
      <EpisodePageComp allEpisodes={allEpisodes} />
    </Layout>
  )
}

export default EpisodePage

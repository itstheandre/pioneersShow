import React from "react"
import Layout from "../components/layout"
import HomePageComp from "../components/Pages/HomePageComp"
import { useSeasons } from "../CustomHooks/useSeasons"

export const query = graphql`
  {
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

const IndexPage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )

  return (
    <Layout>
      <HomePageComp allEpisodes={allEpisodes} />
    </Layout>
  )
}

export default IndexPage

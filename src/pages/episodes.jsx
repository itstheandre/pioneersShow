import React from "react"
import Layout from "../components/layout"
import EpisodePageComp from "../components/Pages/EpisodePageComp"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allSanityEpisode(sort: { fields: episodeNumber, order: DESC }) {
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
          episodeNumber
        }
      }
    }
  }
`

const EpisodePage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )

  // const sortEpisodes = [...allEpisodes].sort(
  //   (a, b) => b.episodeNumber - a.episodeNumber
  // )
  // console.log({ sortEpisodes })

  return (
    <Layout>
      <EpisodePageComp allEpisodes={allEpisodes} />
    </Layout>
  )
}

export default EpisodePage

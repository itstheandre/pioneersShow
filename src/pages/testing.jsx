import React from "react"
import TestingGround from "../components/TestingCOMP"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allSanityEpisode {
      edges {
        node {
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
        }
      }
    }
  }
`

const TestingPage = ({ data }) => {
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )
  return (
    <Layout>
      <TestingGround allEpisodes={allEpisodes} />
    </Layout>
  )
}

export default TestingPage

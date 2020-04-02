import React from "react"
import Layout from "../components/layout"
import TeamPageComp from "../components/Pages/TeamPageComp"
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
    allSanityTeamMember {
      edges {
        node {
          description
          name
          socialLinks
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
                src
              }
            }
          }
        }
      }
    }
  }
`

const TeamPage = ({ data }) => {
  const allMembers = data.allSanityTeamMember.edges.map(({ node }) => node)
  return (
    <Layout>
      <TeamPageComp members={allMembers} />
    </Layout>
  )
}

export default TeamPage

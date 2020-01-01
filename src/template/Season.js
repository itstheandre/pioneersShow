import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query($slug: [String]) {
    allSanityEpisode(
      filter: { season: { elemMatch: { slug: { current: { in: $slug } } } } }
    ) {
      edges {
        node {
          title
          season {
            title
          }
        }
      }
    }
  }
`

const Season = query => {
  const { data } = query
  //   const { data } = query
  const allEpisodes = data.allSanityEpisode.edges.map(
    ({ node: episode }) => episode
  )
  const { title } = query.pageContext
  console.log({ title })

  return (
    <div>
      <Link to="/">Go Back Home</Link>
      <h1>{title}</h1>
      <h3>List</h3>
      <ul>
        {allEpisodes.map(episode => (
          <li>{episode.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Season

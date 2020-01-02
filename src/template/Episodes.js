import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityEpisode(slug: { current: { eq: $slug } }) {
      title
      episodeLink
    }
  }
`

const Episodes = ({ data: { sanityEpisode } }) => {
  console.log({ sanityEpisode })
  return (
    <div>
      <Link to="/">Go back home</Link>
      <h1>{sanityEpisode.title}</h1>
    </div>
  )
}

export default Episodes

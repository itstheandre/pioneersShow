/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  function mapOver(arr) {
    return arr.map(({ node }) => node)
  }

  const seasonsQuery = await graphql(`
    {
      allSanitySeason {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const seasons = seasonsQuery.data.allSanitySeason.edges.map(
    ({ node }) => node
  )

  const episodesQuery = await graphql(`
    {
      allSanityEpisode {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const episodes = episodesQuery.data.allSanityEpisode.edges.map(
    ({ node }) => node
  )

  episodes.forEach(episode => {
    actions.createPage({
      path: `/${episode.slug.current}`,
      component: path.resolve("./src/template/Episodes.js"),
      context: {
        slug: episode.slug.current,
        title: episode.title,
      },
    })
  })

  seasons.forEach(season => {
    actions.createPage({
      path: `/info/${season.slug.current}`,
      component: path.resolve("./src/template/Season.js"),
      context: {
        slug: season.slug.current,
        title: season.title,
      },
    })
  })
}

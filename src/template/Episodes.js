import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { NavSpace } from "../components/Pages/TeamPageComp"
import { LayoutWrapper } from "../styled/LayoutWrapper"
import styled from "styled-components"
import { SeeAllButton, Button } from "../styled/Buttons"
import { socialIconography } from "../lib/socialIcons"
import RcContactCard from "../components/Cards/RcContactCard"

const EpisodeTemplatePage = styled.main`
  margin-top: 15rem;
  display: grid;
  color: var(--dark-blue);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  grid-template-areas:
    ". title ."
    "epiTitle epiTitle epiTitle"
    ". button ."
    "empty empty empty"
    "info info seeMore";
  place-items: center;

  @media (max-width: 1100px) {
    width: 80%;
    margin: 15rem auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "epiTitle"
      "button"
      "empty"
      "info"
      "seeMore";
  }

  .pageTitle {
    grid-area: title;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 3rem;
  }

  .episodeTitle {
    font-size: 6rem;
    font-family: var(--tt-bold);
    grid-area: epiTitle;
    text-align: center;
  }

  a {
    grid-area: button;
  }

  .empty {
    height: 20rem;
    grid-area: empty;

    @media (max-width: 1100px) {
      height: 10rem;
    }
  }

  .info {
    grid-area: info;
    display: grid;
    grid-gap: 3rem;
    margin-right: 10.5rem;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "image image"
      "text links";

    @media (max-width: 1100px) {
      margin-right: 0;
    }
    a {
      text-decoration: underline;
      color: var(--black);
    }

    ul {
      list-style-type: none;
    }

    .gatsby-image-wrapper {
      height: 35rem;
      grid-area: image;
      margin-bottom: 6rem;
    }

    .epiBody {
      --black: black;
      grid-area: text;
      color: var(--black);
      ul {
        margin-bottom: 3rem;
        li {
          list-style-type: none;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
      }

      h2,
      h3 {
        color: var(--dark-blue);
      }

      h2 {
        margin-bottom: 3rem;
        font-family: var(--tt-bold);

        font-weight: bold;
        font-size: 3.75rem;
        line-height: 5rem;
      }

      p {
        font-size: 2rem;
        margin-bottom: 3rem;
        font-family: var(--lora);
      }

      h3 {
        font-size: 2.75rem;

        margin-bottom: 3rem;
      }
    }

    .links {
      grid-area: links;
      h4 {
        font-family: var(--tt-reg);
        font-size: 2.5rem;
        margin-bottom: 3rem;
      }

      a {
        text-decoration: none;
        text-transform: capitalize;
      }

      li {
        color: var(--secondary);
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

  .seeMore {
    height: 100%;
    grid-area: seeMore;

    width: 100%;

    h3 {
      font-family: var(--tt-reg);
      font-style: bold;
      font-size: 3.75rem;
      margin-bottom: 3rem;
    }
    ul {
      list-style-type: none;
      margin-bottom: 6rem;
      li {
        margin-bottom: 4rem;
      }
    }
  }
`

const Episodes = ({ data }) => {
  const { sanityEpisode, allSanityEpisode } = data
  const seeMoreEpisodes = allSanityEpisode.edges.map(({ node }) => node)
  console.log(sanityEpisode)
  return (
    <Layout>
      <NavSpace />
      <LayoutWrapper>
        <EpisodeTemplatePage>
          {/* <Link to="/">Go back home</Link> */}
          <div className="pageTitle">Episodes</div>
          <div className="episodeTitle">
            #{sanityEpisode.episodeNumber} - {sanityEpisode.title}
          </div>
          <Link to="/episodes">
            <SeeAllButton styleType="primary">
              Listen to the episode
            </SeeAllButton>
          </Link>
          <div className="empty" />
          <div className="info">
            <Img fluid={sanityEpisode.mainImage.asset.fluid} />
            <ReactMarkdown
              className="epiBody"
              source={sanityEpisode.markdown}
            />
            <div className="links">
              <h4>Links</h4>
              <ul>
                {sanityEpisode.socialLinks.map(
                  el => socialIconography(el, "").link
                )}
              </ul>
            </div>
          </div>
          <div className="seeMore">
            <h3>More episodes</h3>
            <ul>
              {seeMoreEpisodes.map(el => {
                const episodeInfo = {
                  ...el,
                  fluid: el.mainImage.asset.fluid,
                  slug: el.slug.current,
                }

                return (
                  <li key={episodeInfo.slug}>
                    <RcContactCard episodeInfo={episodeInfo} side="yes" />
                  </li>
                )
              })}
            </ul>
            <Link to="/episodes">
              <Button styleType="secondary">See more</Button>
            </Link>
          </div>
        </EpisodeTemplatePage>
      </LayoutWrapper>
    </Layout>
  )
}

export default Episodes

export const query = graphql`
  query($slug: String) {
    sanityEpisode(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      season {
        title
      }
      runtime
      publishedDate
      episodeNumber
      episodeLink
      socialLinks
      markdown
      mainImage {
        asset {
          fluid {
            src
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    allSanityEpisode(sort: { order: DESC, fields: episodeNumber }, limit: 4) {
      edges {
        node {
          episodeNumber
          title
          runtime
          publishedDate
          slug {
            current
          }
          mainImage {
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
  }
`

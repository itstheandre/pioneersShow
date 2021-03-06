import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BgImg from "gatsby-background-image"

import allStyles from "../../styled/Theme"
const { palette } = allStyles

//debugging - https://jsfiddle.net/3z117Lpm/1/

const SqEpisodeCard = ({ episodeInfo }) => {
  console.log(episodeInfo)
  const {
    title,
    episodeNumber,
    runtime,
    publishedDate,
    slug,
    fluid,
  } = episodeInfo
  return (
    <Link to={`/${slug}`}>
      <figure className="item">
        <BgImg
          fluid={fluid}
          Tag="div"
          className="image"
          backgroundColor={palette.backgroundTransparent}
        >
          <div className="imageOverlay" />
        </BgImg>
        <figcaption>
          <div className="description">
            {runtime}m | {publishedDate}
          </div>
          <div className="title">
            #{episodeNumber} - {title}
          </div>
        </figcaption>
      </figure>
    </Link>
  )
}

export default SqEpisodeCard

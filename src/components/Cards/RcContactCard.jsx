import React from "react"
import BgImg from "gatsby-background-image"
import { Link } from "gatsby"
import { ReqEpisode } from "../../styled/ContentCard"
import allStyles from "../../styled/Theme"
const { palette } = allStyles

const RcContactCard = ({ episodeInfo }) => {
  const {
    title,
    runtime,
    episodeNumber,
    publishedDate,
    slug,
    fluid,
  } = episodeInfo

  return (
    <ReqEpisode>
      <BgImg
        fluid={fluid}
        Tag="div"
        className="image"
        backgroundColor={palette.backgroundTransparent}
      >
        <div className="overlay" />
      </BgImg>
      <div className="body">
        <div className="description">
          {runtime}m | {publishedDate}
        </div>
        <div className="title">
          #{episodeNumber} - {title}
        </div>
      </div>
    </ReqEpisode>
  )
}

export default RcContactCard

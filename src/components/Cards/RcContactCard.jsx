import React from "react"
import BgImg from "gatsby-background-image"
import { Link } from "gatsby"
import { ReqEpisode } from "../../styled/ContentCard"
import allStyles from "../../styled/Theme"
const { palette } = allStyles

const RcContactCard = ({ episodeInfo, side }) => {
  const {
    title,
    runtime,
    episodeNumber,
    publishedDate,
    slug,
    fluid,
  } = episodeInfo

  const sideShorter = side ? true : false

  return (
    <Link to={`/${slug}`}>
      <ReqEpisode sideShorter={sideShorter}>
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
    </Link>
  )
}

export default RcContactCard

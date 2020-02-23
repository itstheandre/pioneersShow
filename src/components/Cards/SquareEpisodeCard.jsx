import React from "react"
import allStyles from "../../styled/Theme"
import { Episode } from "../../styled/SqContentCard"

const SqEpisodeCard = props => {
  const { img, title, episodeNumber, runtime, publishedDate, slug } = props
  return (
    <div className="episode">
      <Episode img={img}>
        <div className="image">
          <div className="imageOverlay" />
        </div>
        <div className="contentBody">
          <div className="description">
            {runtime}m | {publishedDate}
          </div>
          <div className="title">
            #{episodeNumber} - {title}
          </div>
        </div>
      </Episode>
    </div>
  )
}

export default SqEpisodeCard

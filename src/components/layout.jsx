import React from "react"
import Navbar from "./Navbar"
import "./layout.css"
import { Body, ContentWrapper } from "../styled/S_Layout"
import { WrapperProvider } from "../Context/WrapperContext"
import { Helmet } from "react-helmet"

import {
  spotifyColorLogo,
  googleColorLogo,
  itunesColorLogo,
  youtubeColorLogo,
} from "../utils/image-loader"
import BottomArea from "./Footer/BottomArea"

const Layout = props => {
  const logos = [
    {
      name: "Spotify",
      img: spotifyColorLogo,
      link: "https://open.spotify.com/show/556GnaAw1m54rGyUGJQk8K",
    },
    {
      name: "Google",
      img: googleColorLogo,
      link:
        "https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLnBpcHBhLmlvL3B1YmxpYy9zaG93cy81YjIyNjk4MTU5MzNkNmUyMjEzY2NjYTQ%3D&episode=NWQxYmEwN2Q0ZDU3ODg5NzRjYjY3ZGMy",
    },
    {
      name: "Youtube",
      img: youtubeColorLogo,
      link: "https://www.youtube.com/channel/UCQvhAoMsqmeAamNjZ1lxeww",
    },
    {
      name: "iTunes",
      img: itunesColorLogo,
      link:
        "https://itunes.apple.com/de/podcast/pioneers-show-with-andr%C3%A9-de-albuquerque/id1400385968?l=en&mt=2",
    },
  ]

  return (
    <div className="app">
      <Helmet>
        <title>Test</title>
      </Helmet>
      <WrapperProvider>
        <Body>
          <ContentWrapper>
            <Navbar />
            {props.children}
          </ContentWrapper>
          <BottomArea logos={logos} />
        </Body>
      </WrapperProvider>
    </div>
  )
}

export default Layout

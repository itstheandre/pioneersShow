import React from "react"
import { instagramSVG, twitterSVG, linkedinSVG } from "../utils/image-loader"

// const socialCheck = ((link, account) = link.includes(account))
function socialLinking(link, name) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <li>{name}</li>
    </a>
  )
}

function urlDomain(link) {
  const [domain] = new URL(link).hostname
    .split("www.")
    .join("")
    .split(".com")
  return domain
}

export function socialIconography(link, name) {
  return {
    img: socialIcon(link, name),
    link: socialLinking(link, urlDomain(link)),
  }
}

function socialIcon(link, name) {
  if (link === "linkedin") {
    return <img src={linkedinSVG} alt={`${name}'s Linkedin Account`} />
  }
  if (link === "instagram") {
    return <img src={instagramSVG} alt={`${name}'s Instagram Account`} />
  }
  if (link === "twitter") {
    return <img src={twitterSVG} alt={`${name}'s Twitter Account`} />
  }
}

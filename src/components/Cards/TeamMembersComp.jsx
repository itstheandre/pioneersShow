import React from "react"
import styled from "styled-components"
import BgImg from "gatsby-background-image"
import allStyles from "../../styled/Theme"
import { socialIcons, socialIconography } from "../../lib/socialIcons"
const { palette } = allStyles

const TeamMemberStyle = styled.figure`
  width: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  z-index: -1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  .image {
    padding-bottom: 50%;
    ::before {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    .imageOverlay {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-color: ${palette.backgroundTransparent};
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
  figcaption {
    padding: 4rem 3rem;
    h4 {
      font-family: var(--tt-reg);
      padding-bottom: 3rem;
      color: var(--dark-blue);
      font-weight: bold;
      font-size: 20px;
    }
    p {
      font-family: var(--lora);
      font-size: 2rem;
    }
  }

  .socialLinks {
    padding-top: 4rem;
    display: flex;
    img {
      margin-right: 3rem;
    }
  }
`

const TeamMembersComp = ({ teamMember }) => {
  console.log(teamMember)

  return (
    <TeamMemberStyle>
      <BgImg fluid={teamMember.image.asset.fluid} Tag="div" className="image">
        <div className="overlay" />
      </BgImg>
      <figcaption>
        <h4>{teamMember.name}</h4>
        <p>{teamMember.description}</p>
        <div className="socialLinks">
          {teamMember.socialLinks.map(link => (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {socialIconography(link, teamMember.name).img}
            </a>
          ))}
        </div>
      </figcaption>
    </TeamMemberStyle>
  )
}

export default TeamMembersComp

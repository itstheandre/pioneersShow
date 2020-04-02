import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import styled from "styled-components"
import { LayoutWrapper } from "../../styled/LayoutWrapper"
import TeamMembersComp from "../Cards/TeamMembersComp"

export const NavSpace = styled.section`
  height: 12rem;
  background: white;
`

const TeamPage = styled.main`
  /* z-index: -10000; */

  .page {
    padding-top: 16rem;
    margin-bottom: 21.6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "team member1 member2";
    grid-gap: 2.4rem;
    @media (max-width: 1200px) {
      width: 90%;
      margin: 0 auto;
    }
    @media (max-width: 990px) {
      padding-top: 7rem;
      padding-bottom: 10rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "team team"
        "member1 member2";
    }
    @media (max-width: 900px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "team"
        "member1"
        "member2";
    }
  }

  .teamMember1 {
    grid-area: member2;
  }
  .teamMember2 {
    grid-area: member1;
  }

  .team {
    grid-area: team;
    color: var(--dark-blue);
    .pageTitle {
      font-family: var(--tt-reg);
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding-bottom: 4rem;
    }
    .teamPraise {
      font-family: var(--tt-bold);
      font-style: normal;
      font-weight: bold;
      font-size: 6rem;
      line-height: 8rem;
    }

    @media (max-width: 990px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 770px) {
      align-items: flex-start;
      .pageTitle {
        font-size: 2rem;
      }
      .teamPraise {
        font-size: 4rem;
        line-height: 5rem;
      }
    }
  }
`

const TeamPageComp = ({ members }) => {
  return (
    <LayoutWrapper>
      <TeamPage>
        <NavSpace />
        <div className="page">
          <div className="team">
            <div className="pageTitle">TEAM</div>
            <div className="teamPraise">The people behind the project</div>
          </div>
          {members.map((teamMember, i) => (
            <div className={` teamMember${i + 1}`}>
              <TeamMembersComp teamMember={teamMember} />
            </div>
          ))}
        </div>
      </TeamPage>
    </LayoutWrapper>
  )
}

export default TeamPageComp

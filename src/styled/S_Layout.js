import styled, { css } from "styled-components"
import allStyles from "./Theme"

const { navBar, palette } = allStyles

// BODY
const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const ContentWrapper = styled.div`
  flex-grow: 1;
`

//NAVBAR
const NavBarStyled = styled.nav`
  position: fixed;
  width: 100vw;
  height: 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  margin: 0 auto;
  ${({ change }) =>
    change &&
    css`
      background-color: ${({ change }) => navBar.background[change]};
      box-shadow: ${({ change }) => navBar.shadow[change]};
    `}
`

const MenuList = styled.ul`
  font-size: 3rem;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  a {
    height: 2.5rem;
    font-size: 2.25rem;
    text-decoration: none;
    ${({ change }) =>
      change &&
      css`
        color: ${({ change }) => navBar.text[change]};
      `}
  }
`

const MenuItems = styled.li`
  padding: 0 3rem;
`

const NavLogo = styled.img`
  height: 4rem;
`

//FOOTER

const FooterComponent = styled.footer`
  padding-top: 3rem;
  background-color: ${palette.footer};
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`

const FooterLogos = styled.img`
  padding: 1rem 3rem;
`

const Caption = styled.p`
  font-size: 1.5rem;
  padding: 4rem;
`

const StayConnected = styled.h4`
  padding: 2rem;
  font-size: 2.25rem;
`

export {
  Body,
  ContentWrapper,
  NavBarStyled,
  MenuList,
  NavLogo,
  MenuItems,
  FooterComponent,
  FooterLogos,
  StayConnected,
  Caption,
}

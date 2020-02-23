import styled, { css } from "styled-components"
import allStyles from "./Theme"

const { navBar } = allStyles

const NavBarStyled = styled.nav`
  z-index: 10000;
  position: fixed;
  top: 0%;
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

export { NavBarStyled, MenuList, NavLogo, MenuItems }

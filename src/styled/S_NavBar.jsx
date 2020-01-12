import styled from "styled-components"
import allStyles from "./Theme"

const { navBar } = allStyles

const DesktopNav = styled.nav`
  position: fixed;
  height: 12rem;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;

  .navWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 5rem;
    margin: 0 auto;
    background-color: ${({ change }) => navBar.background[change]};
    box-shadow: ${({ change }) => navBar.shadow[change]};
  }

  .centerEverything {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .logo {
    height: 4rem;
    display: flex;
    align-items: center;
    img {
      height: 100%;
    }
  }

  .linksToCenter {
    height: 4rem;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
  }

  .navLinks {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    height: 2.5rem;
    list-style-type: none;
    font-size: 2.25rem;
    width: 50vw;
    @media screen and (max-width: 768px) {
      display: none;
    }

    a {
      height: 2.5rem;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 3rem;
      height: 2.5rem;
    }
  }

  .link {
    color: ${({ change }) => navBar.text[change]};
    align-self: center;
    /* display: flex;
    flex-flow: row nowrap;
    align-items: center; */
    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }
  }
`

const MobileNavButton = styled.button`
  background: transparent;
  height: 100%;
  width: 6vw;
  border: none;
  display: none;
  visibility: ${({ displayMobile }) => (displayMobile ? "hidden" : "visible")};

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export { MobileNavButton, DesktopNav }
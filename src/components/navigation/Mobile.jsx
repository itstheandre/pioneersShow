import React from "react"
import NavLinks from "./NavLinks"
import MobileNavLinks from "./MobileNavLinks"
import styled from "styled-components"
import { pioneersWhiteLogo, closeX } from "../../utils/image-loader"

const MyMobileNav = styled.nav`
  background-color: rgba(30, 51, 89, 0.9);
  position: fixed;
  height: 100vh;
  width: 100vw;

  transition: transform ease-in 0.2s;
  transform: translateX(
    ${({ displayMobile }) => (displayMobile ? "0%" : "100%")}
  );
  display: flex;
  align-items: center;

  .navLinks {
    margin: 0 5.25rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 60vh;
    list-style-type: none;
  }

  .link {
    color: white;
    font-size: 5rem;
    text-decoration: none;
    list-style-type: none;
    font-weight: 800;
  }
  .nav {
    height: 12rem;
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    top: 0;
    margin: 0 auto;
  }

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
  }

  .logo {
    height: 4rem;
    display: flex;
    align-items: center;
    visibility: hidden;
    img {
      height: 100%;
    }
  }
`

const MyXButton = styled.button`
  background: transparent;
  height: 100%;
  width: 6vw;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Mobile = ({ displayMobile, toggle }) => {
  return (
    <MyMobileNav displayMobile={displayMobile}>
      <div className="nav">
        <div className="navWrapper">
          <div className="logo">
            <img src={pioneersWhiteLogo} alt="blank" />
          </div>
          <MyXButton onClick={toggle}>
            <img src={closeX} alt="X" />
          </MyXButton>
        </div>
      </div>
      <div className="linksWrapper">
        {/* <div className="test"> */}
        <MobileNavLinks isMobileLink={!displayMobile} />
      </div>
      {/* </div> */}
    </MyMobileNav>
  )
}

export default Mobile

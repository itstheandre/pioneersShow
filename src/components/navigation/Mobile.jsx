import React from "react"
import NavLinks from "./NavLinks"
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

  .navLinks {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;
    list-style-type: none;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    list-style-type: none;
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
    /* @media screen and (max-width: 479px) {
      padding: 0 1vw;
    } */
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

// const DesktopReset = styled.nav`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   align-items: center;
//   color: white;
//   height: 15vh;
//   padding: 0 3rem;

//   .logo {
//     visibility: hidden;
//     /* img {
//       height: 100%;
//     } */
//   }
// `

const Mobile = ({ displayMobile, toggle }) => {
  return (
    <MyMobileNav displayMobile={displayMobile}>
      <div className="nav">
        <div className="navWrapper">
          <div className="logo">
            <img src={pioneersWhiteLogo} alt="blank" />
          </div>
          <MyXButton>
            <img src={closeX} alt="X" onClick={toggle} />
          </MyXButton>
        </div>
      </div>
      <NavLinks isMobileLink={!displayMobile} />
    </MyMobileNav>
  )
}

export default Mobile

// const DesktopReset = styled.nav`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   align-items: center;
//   color: white;
//   height: 15vh;
//   padding: 0 3rem;

//   .logo {
//     visibility: hidden;
//     /* img {
//       height: 100%;
//     } */
//   }
// `

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

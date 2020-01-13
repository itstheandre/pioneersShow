import React from "react"
import { pioneersColorLogo, pioneersWhiteLogo } from "../utils/image-loader"
import { Link, navigate } from "gatsby"
import { NavBarStyled, MenuList, NavLogo, MenuItems } from "../styled/S_Layout"
// import Button from "../../styled-components/Buttons"
import { useWrapper } from "../Context/WrapperContext"

// const NavTest = styled.nav`
//   display: flex;
// `

const Navbar = () => {
  const { inView } = useWrapper()

  function goHome() {
    navigate("/index1")
  }

  const logo = inView ? pioneersWhiteLogo : pioneersColorLogo
  // const change = inView ? "true" : "false"
  const change = inView ? true : false
  console.log(change)
  return (
    <>
      <NavBarStyled change={change}>
        <Link to="/index1">
          <NavLogo src={logo} onClick={goHome} />
        </Link>
        <div>
          <MenuList change={change}>
            <MenuItems>
              <Link to="/about">About</Link>
            </MenuItems>
            {/* <MenuItems>
              <Link to="/team">Team</Link>
            </MenuItems> */}
            <MenuItems>
              <Link to="/episodes">Episodes</Link>
            </MenuItems>
            <MenuItems>
              <Link to="/contact">Contact</Link>
            </MenuItems>
            <MenuItems>
              <Link to="/testing">Testing</Link>
            </MenuItems>
            <MenuItems>
              <Link to="/playing">Playing</Link>
            </MenuItems>
          </MenuList>
        </div>
      </NavBarStyled>
    </>
  )
}

export default Navbar

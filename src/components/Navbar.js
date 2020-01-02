import React from "react"
import { pioneersColorLogo, pioneersWhiteLogo } from "../utils/image-loader"
import { Link } from "gatsby"
import { NavBarStyled, MenuList, NavLogo, MenuItems } from "../styled/S_Layout"
// import Button from "../../styled-components/Buttons"
import { useWrapper } from "../Context/WrapperContext"

const Navbar = () => {
  const { inView } = useWrapper()

  const logo = inView ? pioneersWhiteLogo : pioneersColorLogo
  const change = inView ? "true" : "false"
  return (
    <>
      <NavBarStyled change={change}>
        <Link to="/index1">
          <NavLogo src={logo} />
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
              <Link to="/episodes">Episode List</Link>
            </MenuItems>
            <MenuItems>
              <Link to="/contact">Contact</Link>
            </MenuItems>
            <MenuItems>
              <Link to="/testing">Testing</Link>
            </MenuItems>
          </MenuList>
        </div>
      </NavBarStyled>
    </>
  )
}

export default Navbar

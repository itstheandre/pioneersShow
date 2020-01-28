import React from "react"
import { DesktopNav, MobileNavButton } from "../../styled/S_NavBar"
import {
  pioneersWhiteLogo,
  pioneersColorLogo,
  menuWhite,
  menuBlack,
} from "../../utils/image-loader"
import NavLinks from "./NavLinks"
import { Link } from "gatsby"

const Desktop = ({ toggle, displayMobile, inView }) => {
  const logo = inView ? pioneersWhiteLogo : pioneersColorLogo
  const menuItem = inView ? menuWhite : menuBlack

  const change = inView ? "true" : "false"
  return (
    <DesktopNav inView={inView} change={change}>
      <div className="navWrapper">
        <div className="centerEverything">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="Pioneers Show Logo" />
            </div>
          </Link>
          <NavLinks inView={inView} />
          {!displayMobile && (
            <MobileNavButton displayMobile={displayMobile}>
              <img src={menuItem} alt="mobileNav" onClick={toggle} />
            </MobileNavButton>
          )}
        </div>
      </div>
    </DesktopNav>
  )
}

export default Desktop

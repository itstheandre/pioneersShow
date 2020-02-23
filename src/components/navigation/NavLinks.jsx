import React from "react"
import { menuLinksFunc } from "../../lib/menuLinks"

const NavLinks = ({ isMobileLink }) => {
  let tmpIndex
  if (isMobileLink) {
    tmpIndex = -1
  }

  const navLi = menuLinksFunc(tmpIndex)

  return <ul className="navLinks">{navLi}</ul>
}

export default NavLinks

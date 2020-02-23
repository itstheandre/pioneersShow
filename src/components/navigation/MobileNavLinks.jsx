import React from "react"
import { menuLinksFunc, mobileNavs } from "../../lib/menuLinks"

const MobileNavLinks = ({ isMobileLink }) => {
  let tmpIndex
  if (isMobileLink) {
    tmpIndex = -1
  }

  const navLi = mobileNavs(tmpIndex)

  return <ul className="navLinks">{navLi}</ul>
}

export default MobileNavLinks

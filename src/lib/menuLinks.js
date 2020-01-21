import React from "react"
import { Link } from "gatsby"

const MenuLinks = [
  // { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/episodes", title: "Episodes" },
  { to: "/contact", title: "Contact" },
  // { to: "/testing", title: "Testing" },
]

export function menuLinksFunc(tmpIndex) {
  const style = {
    // color: "blue",
    // textDecoration: "underline",
    // paddingBottom: "1rem",
    // borderBottom: "2px solid white",
  }
  return MenuLinks.map((el, index) => (
    <li key={index}>
      <Link to={el.to} className="link" tabIndex={tmpIndex} activeStyle={style}>
        {el.title}
      </Link>
    </li>
  ))
}

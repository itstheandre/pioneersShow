import React from "react"
import { Link } from "gatsby"

const MenuLinks = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/episodes", title: "Episodes" },
  { to: "/contact", title: "Contact" },
]

export function mobileNavs(tmpIndex) {
  return MenuLinks.map((el, index) => (
    <>
      <li key={index}>
        <Link to={el.to} className="link" tabIndex={tmpIndex}>
          {el.title}
        </Link>
      </li>
    </>
  ))
}

export function menuLinksFunc(tmpIndex) {
  const style = {
    color: "#18F4C9",
    margingBottom: "4rem",
    borderBottom: "1px solid black",
  }

  // console.log({ tmpIndex })
  return MenuLinks.filter((el, i) => i > 0).map((el, i) => (
    <>
      <li key={i}>
        <Link
          to={el.to}
          className="link"
          tabIndex={tmpIndex}
          activeClassName="active"
        >
          {el.title}
        </Link>
      </li>
    </>
  ))
}

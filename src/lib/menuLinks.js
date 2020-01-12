import React from "react"
import { Link } from "gatsby"

export function menuLinksFunc(links, tmpIndex) {
  return links.map((el, index) => (
    <li key={index}>
      <Link to={el.to} className="link" tabIndex={tmpIndex}>
        {el.title}
      </Link>
    </li>
  ))
}

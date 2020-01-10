import React from "react"
import { WrapperProvider } from "./src/Context/WrapperContext"
import "./static/fonts.css"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import "./static/fonts/fonts.css"

export const wrapRootElement = ({ element }) => (
  <WrapperProvider>{element}</WrapperProvider>
)

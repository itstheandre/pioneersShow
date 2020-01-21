import React from "react"
import Layout from "../components/layout"
import AboutPageComp from "../components/Pages/AboutPageComp"

const AboutPage = props => {
  console.log(props.uri)
  return (
    <Layout>
      <AboutPageComp />
    </Layout>
  )
}

export default AboutPage

import React from "react"
import Layout from "../components/layout"
import HomePageComp from "../components/Pages/HomePageComp"

// export const query = graphql`
//   {
//     allSanityEpisode {
//       edges {
//         node {
//           title
//           mainImage {
//             asset {
//               fluid {
//                 src
//               }
//             }
//           }
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  // console.log({ data })
  // const { ref } = useContext(WrapperContext)
  console.log()
  return (
    <Layout>
      <HomePageComp />
    </Layout>
  )
}

export default IndexPage

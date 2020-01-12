import React from "react"
import Layout2 from "../Test/test"
import styled from "styled-components"

const MobileMenu = styled.div`
  height: 100vh;
  background-color: rgba(30, 51, 89, 0.9);
  width: 100vw;
  max-width: 479px;
  margin: 0 auto;
`

const MobileNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 3rem;
  margin-top: 44px;
  background-color: red;
`

// const MobileNavMenu = styled(MobileNav)``

const Testing2 = () => {
  return (
    <Layout2>
      <MobileMenu>
        <MobileNav></MobileNav>
      </MobileMenu>
    </Layout2>
  )
}

export default Testing2

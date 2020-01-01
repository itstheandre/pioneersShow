import styled from "styled-components"

const HomePageHero = styled.div`
  height: 107rem;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: blue;
  padding: 0;
`

export { HomePageHero }

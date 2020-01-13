import styled from "styled-components"

const AboutPageHero = styled.div`
  height: 55vh;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-color: #1e3359;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 479px) {
    height: 65vh;
  }
`

const AboutBody = styled.div`
  /* background-color: orange; */
  width: 100%;
  margin: 17rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutContent = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  /* & p {
    font-size: 2rem;
    line-height: 3rem;
    padding: 0;
    margin: 2rem 0;
  } */
`

export { AboutPageHero, AboutBody, AboutContent }

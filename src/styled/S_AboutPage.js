import styled from "styled-components"

const AboutPageHero = styled.div`
  height: 62rem;
  width: 100vw;
  background: url(${({ img }) => img}) no-repeat;
  background-size: 100%;
  background-color: blue;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutBody = styled.div`
  /* background-color: orange; */
  margin-top: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutContent = styled.div`
  text-align: justify;
  width: 40%;
  /* & p {
    font-size: 2rem;
    line-height: 3rem;
    padding: 0;
    margin: 2rem 0;
  } */
`

export { AboutPageHero, AboutBody, AboutContent }

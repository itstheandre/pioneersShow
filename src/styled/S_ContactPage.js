import styled from "styled-components"

const ContactHero = styled.div`
  height: 62rem;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  /* padding: 0; */
`

const ContactBody = styled.div`
  margin: 17rem 20.25rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`

export { ContactHero, ContactBody }

/*

  /* background: url(${({ img }) => img}) no-repeat; */
/* background: url(${HomePageBG}) no-repeat; */

import styled from "styled-components"

const ContactHero = styled.div`
  height: 60vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${({ img }) => img}) no-repeat;
  background-color: #1e3359;
  background-size: cover;
  background-position: center;
  /* padding: 0; */
`

const ContactBody = styled.div`
  width: 80vw;
  /* height: 60vh; */
  /* margin: 17rem 20.25rem; */
  margin: 17rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: var(--lora);

  p {
    margin-right: 10vw;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    /* width: 50%; */
    p {
      margin-right: 0;
    }
  }
`

const ContactText = styled.p`
  font-size: 2rem;
  line-height: 4rem;
  width: 40vw;

  @media screen and (max-width: 1100px) {
    margin-top: 5vh;
    width: 75%;
  }
  /* width: "54rem"; */
  /* font-size: "20rem"; */
  /* line-height: "4rem"; */
  /* fontfamily: "'Lora', serif"; */
`

export { ContactHero, ContactBody, ContactText }

/*

  /* background: url(${({ img }) => img}) no-repeat; */
/* background: url(${HomePageBG}) no-repeat; */

import styled from "styled-components"
import allStyles from "./Theme"
const { forms } = allStyles

const StyledForm = styled.form`
  width: 40vw;

  .container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  .target {
    div:nth-child(1) {
      margin-right: 6.25rem;
    }
  }

  .individualInput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .smallInput {
    background-color: ${forms.backgroundColor};
    font-size: 2rem;
    /* padding: 1.5rem 2rem; */
    padding: 1.5rem 1vw;
    height: 5rem;
    border-radius: 4px;
    border: none;
    width: 100%;

    font-family: var(--tt-reg);

    /* width: 31.5rem; */
    &::placeholder {
      color: ${forms.placeHolder};
    }
    &[type="text"] {
      color: ${forms.inputText};
    }
  }

  label {
    font-size: 2rem;
    font-family: var(--tt-reg);
    padding: 1rem 0;
  }

  .mediumInput {
    width: 100%;
    font-family: var(--tt-reg);
  }

  .largeInput {
    background-color: ${forms.backgroundColor};
    border-radius: 4px;
    font-size: 2rem;
    padding: 1.5rem 2rem;
    height: 20vh;
    line-height: 3rem;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    resize: none;
    font-family: var(--tt-reg);
  }

  .largeContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const LInpCont = styled.div`
  width: 100%;
  /* width: 65.75rem; */
  display: flex;
  flex-direction: column;
`

const LInput = styled.textarea`
  background-color: ${forms.backgroundColor};
  border-radius: 4px;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  height: 20vh;
  line-height: 3rem;
  /* height: 100%; */
  border-radius: 0.5rem;
  border: none;
  /* width: 65.75.rem; */
  width: 100%;
  resize: none;
  font-family: var(--tt-reg);
`

const Label = styled.label`
  font-size: 2rem;
  font-family: var(--tt-reg);
  padding: 1rem 0;
`

const SInput = styled.input`
  background-color: ${forms.backgroundColor};
  font-size: 2rem;
  /* padding: 1.5rem 2rem; */
  padding: 1.5rem 1vw;
  height: 5rem;
  border-radius: 4px;
  border: none;
  width: 100%;

  font-family: var(--tt-reg);

  /* width: 31.5rem; */
  &::placeholder {
    color: ${forms.placeHolder};
  }
  &[type="text"] {
    color: ${forms.inputText};
  }
`

const MInput = styled(SInput)`
  width: 100%;
  font-family: var(--tt-reg);

  /* width: 65.75rem; */
`

// Label

// Inputs

// Containers

const IndInpCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* margin: 0 1.5vw; */
`

const Form = styled.form`
  width: 40vw;
  z-index: 111111;
  @media screen and (max-width: 1100px) {
    margin-top: 5vh;
    width: 75%;
  }
`

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  /* width: 40%; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const TargetContainer = styled(FormContainer)`
  div:nth-child(1) {
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    div:nth-child(1) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`

export {
  TargetContainer,
  Label,
  SInput,
  MInput,
  LInput,
  LInpCont,
  FormContainer,
  IndInpCont,
  Form,
  StyledForm,
}

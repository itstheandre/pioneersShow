import styled from "styled-components"
import allStyles from "./Theme"
const { forms } = allStyles

const Form = styled.form`
  width: 40vw;
  @media screen and (max-width: 1100px) {
    margin-top: 5vh;
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

const IndInpCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* margin: 0 1.5vw; */
`

// const Container = styled.div`
//   width: 100%;
// `

const SInput = styled.input`
  background-color: ${forms.backgroundColor};
  font-size: 2rem;
  /* padding: 1.5rem 2rem; */
  padding: 1.5rem 1vw;
  height: 5rem;
  border-radius: 4px;
  border: none;
  width: 100%;
  /* width: 31.5rem; */
  &::placeholder {
    color: ${forms.placeHolder};
  }
  &[type="text"] {
    color: ${forms.inputText};
  }
`

// Label
const Label = styled.label`
  font-size: 2rem;
  padding: 1rem 0;
`

// Inputs

const MInput = styled(SInput)`
  width: 100%;
  /* width: 65.75rem; */
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
`

// Containers

const LInpCont = styled.div`
  width: 100%;
  /* width: 65.75rem; */
  display: flex;
  flex-direction: column;
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
}

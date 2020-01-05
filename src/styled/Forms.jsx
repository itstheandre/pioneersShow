import styled from "styled-components";
import allStyles from "./Theme";
const { forms } = allStyles;

// Label
const Label = styled.label`
  font-size: 2rem;
  padding: 1rem 0;
`;

// Inputs

const SInput = styled.input`
  background-color: ${forms.backgroundColor};
  font-size: 2rem;
  padding: 1.5rem 2rem;
  height: 5rem;
  border-radius: 4px;
  border: none;
  width: 31.5rem;
  &::placeholder {
    color: ${forms.placeHolder};
  }
  &[type="text"] {
    color: ${forms.inputText};
  }
`;

const MInput = styled(SInput)`
  width: 65.75rem;
`;

const LInput = styled.textarea`
  background-color: ${forms.backgroundColor};
  border-radius: 4px;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  height: 18rem;
  line-height: 3rem;
  /* height: 100%; */
  border-radius: 0.5rem;
  border: none;
  /* width: 65.75.rem; */
  width: 100%;
`;

// Containers
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const LInpCont = styled.div`
  width: 65.75rem;
  display: flex;
  flex-direction: column;
`;

const IndInpCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Label, SInput, MInput, LInput, LInpCont, FormContainer, IndInpCont };

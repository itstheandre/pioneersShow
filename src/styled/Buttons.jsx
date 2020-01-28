import styled, { css } from "styled-components"
import allStyles from "./Theme"

const { buttons } = allStyles

const Button = styled.button`
  border-radius: 50px;
  height: ${buttons.height};
  padding: ${buttons.padding};
  font-size: ${buttons["font-size"]};
  text-align: center;
  cursor: pointer;
  ${({ styleType }) =>
    styleType &&
    css`
      background-color: ${({ styleType }) => buttons.background[styleType]};
      color: ${({ styleType }) => buttons.text[styleType]};
      border: ${({ styleType }) => buttons.borders[styleType]};
    `};

  @media screen and (max-width: 780px) {
    font-size: 2vh;
    width: auto;
  }
`

const DifButton = styled(Button)`
  margin: 4rem 0;
`

const SeeAllButton = styled(Button)`
  @media screen and (max-width: 780px) {
    width: auto;
  }
`
export { DifButton, Button, SeeAllButton }

import styled, { css } from "styled-components"
import allStyles from "./Theme"

const { buttons } = allStyles

const Button = styled.button`
  border-radius: 50px;
  height: ${buttons.height};
  padding: ${buttons.padding};
  font-size: ${buttons["font-size"]};
  ${({ styleType }) =>
    styleType &&
    css`
      background-color: ${({ styleType }) => buttons.background[styleType]};
      color: ${({ styleType }) => buttons.text[styleType]};
      border: ${({ styleType }) => buttons.borders[styleType]};
    `};
`

const DifButton = styled(Button)`
  margin: 4rem 0;
`
export { DifButton, Button }

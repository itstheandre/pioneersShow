import styled, { css } from "styled-components"
import allStyles from "./Theme"

const { buttons } = allStyles

const Button = styled.button`
  border-radius: 50px;
  height: ${buttons.height};
  padding: ${buttons.padding};
  font-size: ${buttons["font-size"]};
  ${({ type }) =>
    type &&
    css`
      background-color: ${({ type }) => buttons.background[type]};
      color: ${({ type }) => buttons.text[type]};
      border: ${({ type }) => buttons.borders[type]};
    `};
`

export default Button

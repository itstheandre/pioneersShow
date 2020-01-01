import styled, { css } from "styled-components"
import allStyles from "./Theme"
const { tags } = allStyles

const Tag = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${tags.font};
  height: ${tags.height};
  padding: ${tags.padding};
  border-radius: ${tags.borderRadius};
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ selected }) => tags.background[selected]};
      color: ${({ selected }) => tags.color[selected]};
    `};
`

export default Tag

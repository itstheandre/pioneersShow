import styled from "styled-components"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  width: 1080px;
  max-width: 825px;

  @media screen and (max-width: 768px) {
    max-width: 432px;
  }

  @media screen and (max-width: 480px) {
    max-width: 80%;
  }
`
export { LayoutWrapper }

import styled from "styled-components";

export const Container = styled.main `
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    
  }
`;

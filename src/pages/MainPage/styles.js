import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.indianRed}
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 80px;
  height: 62px;
  border: 3px solid ${(props) => props.theme.colors.indianRed};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.Linen};
  }
`;

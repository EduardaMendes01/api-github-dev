import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
  grid-template-columns: auto auto;
  gap: 0.8rem;
  padding: 0 1 rem;
}
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.paleDogwood};
  color: ${(props) => props.theme.colors.Locorice};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;



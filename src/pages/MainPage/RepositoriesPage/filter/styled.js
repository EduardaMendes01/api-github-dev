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
  color: ${(props) => props.color || props.theme.colors.Locorice};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

&:hover,
&.selected {
  background: ${(props) => props.color || props.theme.colors.wine};
  color: ${(props) =>
    props.color ? props.theme.colors.black : props.theme.colors.white};
    transform: translateX(5px) scale(1.02);
}

@media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
  border-radius: 20px;
  &:hover,
  &.selected{
    transform: translateX(0) scale(1.02);
  }
}
`;

export const Cleaner = styled.button`
  background:transparent;
  color:${(props) => props.theme.colors.white};
  border:none;
  text-align:left;
  padding:0 1rem;

  &:hover {
    color:rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    text-align: center;
  }
`;



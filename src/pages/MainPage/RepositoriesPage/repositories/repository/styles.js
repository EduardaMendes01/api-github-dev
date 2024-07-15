import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid ${(props) => props.color || props.theme.colors.Linen};
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: calc(100% - 2rem);
    margin: 0 auto;
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;
  color: ${(props) => props.color || props.theme.colors.black};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.25;
  margin: 1rem 0;
  color: ${(props) => props.color || props.theme.colors.black};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;

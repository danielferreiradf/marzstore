import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${props => props.theme.color7};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  img {
    height: 2.8rem;
  }

  svg {
    color: ${props => props.theme.color6};
    cursor: pointer;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      font-size: 1.2rem;
      color: ${props => props.theme.color3};
    }

    span {
      font-size: 12px;
      color: ${props => props.theme.color3};
    }
  }
  svg {
    color: ${props => props.theme.color6};
  }
`;

export const ContainerFooter = styled.div`
  background-color: ${props => props.theme.color3};
  display: flex;
  justify-content: space-around;

  p {
    font-size: 1.3rem;
    padding: 1rem 0;
    color: ${props => props.theme.color1};
    text-transform: uppercase;
  }
`;

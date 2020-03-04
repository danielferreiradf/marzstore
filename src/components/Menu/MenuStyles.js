import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  transition: all 0.2s;
  width: ${props => (props.menuIsOpen ? "25rem" : "0")};
  overflow: ${props => (props.menuIsOpen ? "visible" : "hidden")};
  height: 80%;
  background-color: ${props => props.theme.color5};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2.5rem 0;
    color: ${props => props.theme.color1};
  }
`;

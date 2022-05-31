import styled from 'styled-components'


export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  cursor: pointer;
  font: inherit;

  &:active {
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid black;
  }
`
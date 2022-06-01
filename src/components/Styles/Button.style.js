import styled from 'styled-components'


export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid black;
  background-color: ${props => 
    props.bgColor === 'edit' ? ({ theme }) => theme.colors.bgEditBtn
    : props.bgColor === 'submit' ? ({ theme }) => theme.colors.bgSubmitBtn
    : props.bgColor === 'add' ? ({ theme }) => theme.colors.bgAddBtn
    : props.bgColor === 'delete' ? ({ theme }) => theme.colors.bgDeleteBtn
    : '#ccc'};
  cursor: pointer;
  font: inherit;

  @media (max-width: 600px) {
    font: inherit;
    width: 70px;
    height: 25px;
  }

  &:active {
  background-color: ${(props) => 
    props.bgColor === 'edit' ? ({ theme }) => theme.colors.darkBgEditBtn 
    : props.bgColor === 'submit' ? ({ theme }) => theme.colors.darkBgSubmitBtn
    : props.bgColor === 'add' ? ({ theme }) => theme.colors.darkBgAddBtn
    : props.bgColor === 'delete' ? ({ theme }) => theme.colors.darkBgDeleteBtn
    : '#999'};
  
  border: 2px solid black;
  }
`
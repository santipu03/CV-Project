import React from "react";
import { Button } from "./Styles/Button.style"
import styled from "styled-components";

export default class CardFooter extends React.Component {
  render () {
    if (this.props.isSubmitted) {
      return (
        <ButtonWrapper>
          <Button 
            type="button" 
            onClick={this.props.onSubmitBtn}
            color='#fdba74'
            backgroundColor='#fb923c'
          >Edit</Button>
        </ButtonWrapper>
      )
    } else {
      return (
        <ButtonWrapper>
          <Button 
            type="button" 
            onClick={this.props.onSubmitBtn}
            color='#86efac'
            backgroundColor='#4ade80'
          >Submit
          </Button>     
        </ButtonWrapper>
      )
    }
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #000;
`
import React from 'react'
import { Button } from './Styles/Button.style'
import styled from 'styled-components'

export default function CardFooter (props) {
  if (props.isSubmitted) {
    return (
      <ButtonWrapper>
        <Button type="button" onClick={props.onSubmitBtn} bgColor="edit">
          Edit
        </Button>
      </ButtonWrapper>
    )
  } else {
    return (
      <ButtonWrapper>
        <Button
          type="button"
          onClick={props.onSubmitBtn}
          bgColor="submit"
        >
          Submit
        </Button>
      </ButtonWrapper>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`

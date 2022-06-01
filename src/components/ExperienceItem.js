import React from 'react'
import { format } from 'date-fns'
import { Button } from './Styles/Button.style'
import { Input } from './Styles/Input.style'
import { Form } from './Styles/Form.style'
import styled from 'styled-components'

export default function ExperienceItem (props) {
  if (!props.isSubmitted) {
    return (
      <>
        <Form>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <Input
              type={'text'}
              placeholder="Microsoft"
              id="companyName"
              value={props.companyName}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="companyPosition">Position Title</label>
            <Input
              type={'text'}
              placeholder="Senior Developer"
              id="companyPosition"
              value={props.companyPosition}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="firstDayJob">From:</label>
            <Input
              type={'month'}
              id="firstDayJob"
              value={props.firstDayJob}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastDayJob">To:</label>
            <Input
              type={'month'}
              id="lastDayJob"
              value={props.lastDayJob}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
        </Form>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => props.onDeleteItem(props.id)}
            bgColor="delete"
          >
            Delete
          </Button>
        </ButtonWrapper>
      </>
    )
  } else if (
    props.isSubmitted &&
    props.firstDayJob &&
    props.lastDayJob
  ) {
    // The date prop has to have some value so date-fns library don't throw errors
    return (
      <SubmittedItemWrapper>
        <div>
          <strong>
            {format(new Date(props.firstDayJob), 'MMM yyyy')} -&nbsp;
            {format(new Date(props.lastDayJob), 'MMM yyyy')}
          </strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.companyPosition}</strong>
          </div>
          <div>{props.companyName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
    )
  } else {
    // If the date prop has no value, return 'Date'
    return (
      <SubmittedItemWrapper>
        <div>
          <strong>Date -&nbsp; Date</strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.companyPosition}</strong>
          </div>
          <div>{props.companyName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px;
`

const SubmittedItemWrapper = styled.div`
  padding: 20px 40px;
  margin: 10px 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.black};

  @media (max-width: 550px) {
    margin: 10px 15px;
    padding: 10px 15px;
  }
`

const AlignedRightWrapper = styled.div`
  text-align: right;
`

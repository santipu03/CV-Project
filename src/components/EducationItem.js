import React from 'react'
import format from 'date-fns/format'
import { Button } from './Styles/Button.style'
import { Input } from './Styles/Input.style'
import { Form } from './Styles/Form.style'
import styled from 'styled-components'

export default function EducationItem (props) {
  if (!props.isSubmitted) {
    return (
      <>
        <Form>
          <div>
            <label htmlFor="schoolName">School Name</label>
            <Input
              type={'text'}
              placeholder="Yale University"
              id="schoolName"
              value={props.schoolName}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="degree">Position Title</label>
            <Input
              type={'text'}
              placeholder="Software Engineering"
              id="degree"
              value={props.degree}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="firstDayDegree">From:</label>
            <Input
              type={'month'}
              id="firstDayDegree"
              value={props.firstDayDegree}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastDayDegree">To:</label>
            <Input
              type={'month'}
              id="lastDayDegree"
              value={props.lastDayDegree}
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
  } else if (props.isSubmitted && props.firstDayDegree && props.lastDayDegree) {
    return (
      <SubmittedItemWrapper>
        <div>
          <strong>
            {format(new Date(props.firstDayDegree), 'MMM yyyy')} -&nbsp;
            {format(new Date(props.lastDayDegree), 'MMM yyyy')}
          </strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.degree}</strong>
          </div>
          <div>{props.schoolName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
    )
  } else {
    return (
      <SubmittedItemWrapper>
        <div>
          <strong>Date -&nbsp; Date</strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.degree}</strong>
          </div>
          <div>{props.schoolName}</div>
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

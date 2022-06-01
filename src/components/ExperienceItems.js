import React from "react";
import { format } from "date-fns";
import { Button } from "./Styles/Button.style";
import { Input } from "./Styles/Input.style";
import { Form } from "./Styles/Form.style";
import styled from "styled-components";

export default class ExperienceItems extends React.Component {
  render () {
    if (!this.props.isSubmitted){
      return (
        <>
        <Form>
            <div>
              <label htmlFor="companyName">Company Name</label>
              <Input 
                type={"text"} 
                placeholder="Microsoft" 
                id="companyName"
                value={this.props.companyName}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
            <div>
              <label htmlFor="companyPosition">Position Title</label>
              <Input 
                type={"text"} 
                placeholder="Senior Developer" 
                id="companyPosition"
                value={this.props.companyPosition}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
            <div>
              <label htmlFor="firstDayJob">From:</label>
              <Input 
                type={"month"} 
                id="firstDayJob"
                value={this.props.firstDayJob}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
            <div>
              <label htmlFor="lastDayJob">To:</label>
              <Input 
                type={"month"} 
                id="lastDayJob"
                value={this.props.lastDayJob}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
          </Form>
          <ButtonWrapper>
            <Button 
              type="button" 
              onClick={() => this.props.onDeleteItem(this.props.id)}
              color='#fca5a5'
              backgroundColor='#f87171'
            >Delete
            </Button>
          </ButtonWrapper>
        </>
      )
    } else if (this.props.isSubmitted && this.props.firstDayJob && this.props.lastDayJob){
      // The date prop has to have some value so date-fns library don't throw errors
      return(
        <SubmittedItemWrapper>
          <div><strong>
            {format(new Date(this.props.firstDayJob), 'MMM yyyy')} -&nbsp;
            {format(new Date(this.props.lastDayJob), 'MMM yyyy')}
          </strong></div>
          <AlignedRightWrapper>
            <div><strong>{this.props.companyPosition}</strong></div>
            <div>{this.props.companyName}</div>
          </AlignedRightWrapper>
        </SubmittedItemWrapper>
      ) 
    } else {
      // If the date prop has no value, return 'Date'
      return(
        <SubmittedItemWrapper>
          <div><strong>
            Date -&nbsp; Date
          </strong></div>
          <AlignedRightWrapper>
            <div><strong>{this.props.companyPosition}</strong></div>
            <div>{this.props.companyName}</div>
          </AlignedRightWrapper>
        </SubmittedItemWrapper>
      )
    }
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
  border: 1px solid #000;

  @media (max-width: 550px) {
    margin: 10px 15px;
    padding: 10px 15px;
  }
`

const AlignedRightWrapper = styled.div`
  text-align: right;
`
import React from "react";
import format from "date-fns/format";
import { Button } from "./Styles/Button";
import { Input } from "./Styles/Input";
import { Form } from "./Styles/Form";
import styled from "styled-components";

export default class EducationItem extends React.Component {
  render () {
    if (!this.props.isSubmitted){
      return (
        <>
          <Form>
            <div>
              <label htmlFor="schoolName">School Name</label>
              <Input 
                type={"text"} 
                placeholder="Yale University" 
                id="schoolName"
                value={this.props.schoolName}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
            <div>
              <label htmlFor="degree">Position Title</label>
              <Input 
                type={"text"} 
                placeholder="Software Engineering" 
                id="degree"
                value={this.props.degree}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>  
              </Input>
            </div>
            <div>
              <label htmlFor="firstDayDegree">From:</label>
              <Input 
                type={"month"} 
                id="firstDayDegree"
                value={this.props.firstDayDegree}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </Input>
            </div>
            <div>
              <label htmlFor="lastDayDegree">To:</label>
              <Input 
                type={"month"} 
                id="lastDayDegree"
                value={this.props.lastDayDegree}
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
            >Delete</Button>
          </ButtonWrapper>
        </>
      )
    } else if (this.props.isSubmitted && this.props.firstDayDegree && this.props.lastDayDegree) {
      return(
        <SubmittedItemWrapper>
          <div><strong>
            {format(new Date(this.props.firstDayDegree), 'MMM yyyy')} -&nbsp;
            {format(new Date(this.props.lastDayDegree), 'MMM yyyy')}
          </strong></div>
          <AlignedRightWrapper>
            <div><strong>{this.props.degree}</strong></div>
            <div>{this.props.schoolName}</div>
          </AlignedRightWrapper>
        </SubmittedItemWrapper>
      )
    } else {
      return(
        <SubmittedItemWrapper>
          <div><strong>
            Date -&nbsp; Date
          </strong></div>
          <AlignedRightWrapper>
            <div><strong>{this.props.degree}</strong></div>
            <div>{this.props.schoolName}</div>
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
import React from "react";
import { Form } from "./Styles/Form";
import { Input, Textarea } from "./Styles/Input";
import styled from 'styled-components'

export default class GeneralSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      description: ''
    }
  }

  handleChangeInput (e) {
    // the id of the inputs are the same as the properties of state
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    if (!this.props.isSubmitted){
      return (
        <section>
          <FirstSectionTitle>General Information</FirstSectionTitle>
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Input 
                type="text"
                placeholder="Adam" 
                id="firstName" 
                value={this.state.firstName}
                onChange={this.handleChangeInput.bind(this)}>
              </Input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Input 
                type={"text"} 
                placeholder="Smith" 
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChangeInput.bind(this)}>
              </Input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input 
                type={"email"} 
                placeholder="adamsmith@gmail.com" 
                id="email"
                value={this.state.email}
                onChange={this.handleChangeInput.bind(this)}>
              </Input>
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Input 
                type={"number"} 
                placeholder="686354264" 
                id="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChangeInput.bind(this)}>
              </Input>
            </div>
            <TextAreaWrapper>
              <label htmlFor="description">Brief Description</label>
              <Textarea 
                placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing." 
                name="description" 
                id="description"
                value={this.state.description}
                onChange={this.handleChangeInput.bind(this)}>
                </Textarea>
            </TextAreaWrapper>
          </Form>
        </section>
      )
    } else {
      return (
        <section>
          <FirstSectionTitle>{this.state.firstName} {this.state.lastName}</FirstSectionTitle>
          <article>
            <DescriptionWrapper>"{this.state.description}"</DescriptionWrapper>
            <EmailPhoneWrapper>
              <div>
                <div className="email">Email</div>
                <div>{this.state.email}</div>
              </div>
              <div>
                <div className="phoneNumber">Phone Number</div>
                <div>{this.state.phoneNumber}</div>
              </div>
            </EmailPhoneWrapper>
            
          </article>
        </section>
      )
    }
    
  }
}

const FirstSectionTitle = styled.div`
  border: none;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  padding: 20px 0;
`

const TextAreaWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 3/5;

  @media (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 5/7;
  }
`

const DescriptionWrapper = styled.div`
  font-style: italic;
  text-align: center;
`

const EmailPhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 30px;


  @media (max-width: 800px) {
    gap: 50px
  }
  @media (max-width: 500px) {
    gap: 20px
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  & .email, & .phoneNumber {
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
    font-size: 0.8rem;
  }
`
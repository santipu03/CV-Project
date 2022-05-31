import React from "react";
import { Input, Textarea } from "./Utils/Input";

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
          <div className="sectionTitle firstSectionTitle">General Information</div>
          <form>
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
            <div className="textarea-wr">
              <label htmlFor="description">Brief Description</label>
              <Textarea 
                placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing." 
                name="description" 
                id="description"
                value={this.state.description}
                onChange={this.handleChangeInput.bind(this)}>
                </Textarea>
            </div>
          </form>
        </section>
      )
    } else {
      return (
        <section>
          <div className="sectionTitle firstSectionTitle">{this.state.firstName} {this.state.lastName}</div>
          <article>
            <div className="description">"{this.state.description}"</div>
            <div className="email-phone-wr">
              <div>
                <div className="email">Email</div>
                <div>{this.state.email}</div>
              </div>
              <div>
                <div className="phoneNumber">Phone Number</div>
                <div>{this.state.phoneNumber}</div>
              </div>
            </div>
            
          </article>
        </section>
      )
    }
    
  }
}
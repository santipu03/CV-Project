import React from "react";

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
              <input 
                type={"text"} 
                placeholder="Adam" 
                name="firstName" 
                id="firstName" 
                value={this.state.firstName}
                onChange={this.handleChangeInput.bind(this)}>
              </input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input 
                type={"text"} 
                placeholder="Smith" 
                name="lastName" 
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChangeInput.bind(this)}>
              </input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type={"email"} 
                placeholder="adamsmith@gmail.com" 
                name="email" 
                id="email"
                value={this.state.email}
                onChange={this.handleChangeInput.bind(this)}>
              </input>
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                type={"number"} 
                placeholder="686354264" 
                name="phoneNumber" 
                id="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChangeInput.bind(this)}>
              </input>
            </div>
            <div className="textarea-wr">
              <label htmlFor="description">Brief Description</label>
              <textarea 
                placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing." 
                name="description" 
                id="description"
                value={this.state.description}
                onChange={this.handleChangeInput.bind(this)}>
                </textarea>
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
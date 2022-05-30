import React from "react";


export default class ExperienceItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      companyName: '',
      companyPosition: '',
      firstDayJob: '',
      lastDayJob: ''
    }
  }

  handleChangeInput (e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    return (
      <>
      <form>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input 
              type={"text"} 
              placeholder="Microsoft" 
              name="companyName" 
              id="companyName"
              value={this.state.companyName}
              onChange={this.handleChangeInput.bind(this)}>
            </input>
          </div>
          <div>
            <label htmlFor="companyPosition">Position Title</label>
            <input 
              type={"text"} 
              placeholder="Senior Developer" 
              name="companyPosition" 
              id="companyPosition"
              value={this.state.companyPosition}
              onChange={this.handleChangeInput.bind(this)}>
            </input>
          </div>
          <div>
            <label htmlFor="firstDayJob">From:</label>
            <input 
              type={"date"} 
              name="firstDayJob" 
              id="firstDayJob"
              value={this.state.firstDayJob}
              onChange={this.handleChangeInput.bind(this)}>
            </input>
          </div>
          <div>
            <label htmlFor="lastDayJob">To:</label>
            <input 
              type={"date"} 
              name="lastDayJob" 
              id="lastDayJob"
              value={this.state.lastDayJob}
              onChange={this.handleChangeInput.bind(this)}>
            </input>
          </div>
        </form>
        <div className="btn-wr">
          <button type="button" className="delete-btn" onClick={this.props.onDeleteExperience}>Delete</button>
        </div>
      </>
    )
  }
}
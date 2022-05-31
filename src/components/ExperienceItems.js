import React from "react";
import { format } from "date-fns";


export default class ExperienceItems extends React.Component {
  render () {
    if (!this.props.isSubmitted){
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
                value={this.props.companyName}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
            <div>
              <label htmlFor="companyPosition">Position Title</label>
              <input 
                type={"text"} 
                placeholder="Senior Developer" 
                name="companyPosition" 
                id="companyPosition"
                value={this.props.companyPosition}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
            <div>
              <label htmlFor="firstDayJob">From:</label>
              <input 
                type={"month"} 
                name="firstDayJob" 
                id="firstDayJob"
                value={this.props.firstDayJob}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
            <div>
              <label htmlFor="lastDayJob">To:</label>
              <input 
                type={"month"} 
                name="lastDayJob" 
                id="lastDayJob"
                value={this.props.lastDayJob}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
          </form>
          <div className="btn-wr">
            <button 
              type="button" 
              className="delete-btn" 
              onClick={() => this.props.onDeleteItem(this.props.id)}
            >Delete
            </button>
          </div>
        </>
      )
    } else {
      return(
        <article className="submittedExperienceItem">
          <div><strong>
            {format(new Date(this.props.firstDayJob), 'MMM yyyy')} -&nbsp;
            {format(new Date(this.props.lastDayJob), 'MMM yyyy')}
          </strong></div>
          <div className="position-company">
            <div><strong>{this.props.companyPosition}</strong></div>
            <div>{this.props.companyName}</div>
          </div>
        </article>
      )
      
    }
    
  }
}
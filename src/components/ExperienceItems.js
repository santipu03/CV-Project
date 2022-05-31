import React from "react";
import { format } from "date-fns";
import { Button } from "./Utils/Button";
import { Input } from "./Utils/Input";

export default class ExperienceItems extends React.Component {
  render () {
    if (!this.props.isSubmitted){
      return (
        <>
        <form>
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
          </form>
          <div className="btn-wr">
            <Button 
              type="button" 
              onClick={() => this.props.onDeleteItem(this.props.id)}
              color='#fca5a5'
              backgroundColor='#f87171'
            >Delete
            </Button>
          </div>
        </>
      )
    } else if (this.props.isSubmitted && this.props.firstDayJob && this.props.lastDayJob){
      // The date prop has to have some value so date-fns library don't throw errors
      return(
        <article className="submittedItem">
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
    } else {
      // If the date prop has no value, return 'Date'
      return(
        <article className="submittedItem">
          <div><strong>
            Date -&nbsp; Date
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
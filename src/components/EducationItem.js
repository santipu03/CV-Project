import React from "react";
import format from "date-fns/format";
import { Button } from "./Utils/Button";
import { Input } from "./Utils/Input";

export default class EducationItem extends React.Component {
  render () {
    if (!this.props.isSubmitted){
      return (
        <>
          <form>
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
          </form>
          <div className="btn-wr">
            <Button 
              type="button" 
              onClick={() => this.props.onDeleteItem(this.props.id)}
              color='#fca5a5'
              backgroundColor='#f87171'
            >Delete</Button>
          </div>
        </>
      )
    } else if (this.props.isSubmitted && this.props.firstDayDegree && this.props.lastDayDegree) {
      return(
        <article className="submittedItem">
          <div><strong>
            {format(new Date(this.props.firstDayDegree), 'MMM yyyy')} -&nbsp;
            {format(new Date(this.props.lastDayDegree), 'MMM yyyy')}
          </strong></div>
          <div className="position-company">
            <div><strong>{this.props.degree}</strong></div>
            <div>{this.props.schoolName}</div>
          </div>
        </article>
      )
    } else {
      return(
        <article className="submittedItem">
          <div><strong>
            Date -&nbsp; Date
          </strong></div>
          <div className="position-company">
            <div><strong>{this.props.degree}</strong></div>
            <div>{this.props.schoolName}</div>
          </div>
        </article>
      )
    }
  } 
}
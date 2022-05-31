import React from "react";
import format from "date-fns/format";

export default class EducationItem extends React.Component {
  render () {
    if (!this.props.isSubmitted){
      return (
        <>
          <form>
            <div>
              <label htmlFor="schoolName">School Name</label>
              <input 
                type={"text"} 
                placeholder="Yale University" 
                name="schoolName" 
                id="schoolName"
                value={this.props.schoolName}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
            <div>
              <label htmlFor="degree">Position Title</label>
              <input 
                type={"text"} 
                placeholder="Software Engineering" 
                name="degree" 
                id="degree"
                value={this.props.degree}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>  
              </input>
            </div>
            <div>
              <label htmlFor="firstDayDegree">From:</label>
              <input 
                type={"month"} 
                name="firstDayDegree" 
                id="firstDayDegree"
                value={this.props.firstDayDegree}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
            <div>
              <label htmlFor="lastDayDegree">To:</label>
              <input 
                type={"month"} 
                name="lastDayDegree" 
                id="lastDayDegree"
                value={this.props.lastDayDegree}
                onChange={(e) => this.props.onInputChange(e,this.props.id)}>
              </input>
            </div>
          </form>
          <div className="btn-wr">
            <button 
              type="button" 
              className="delete-btn"
              onClick={() => this.props.onDeleteItem(this.props.id)}
            >Delete</button>
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
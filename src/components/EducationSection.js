import React from "react";

export default class EducationSection extends React.Component {
  render () {
    return (
      <section>
        <div className="sectionTitle">Education</div>
        <form>
          <div>
            <label htmlFor="schoolName">School Name</label>
            <input type={"text"} placeholder="Yale University" name="schoolName" id="schoolName"></input>
          </div>
          <div>
            <label htmlFor="degree">Position Title</label>
            <input type={"text"} placeholder="Software Engineering" name="degree" id="degree"></input>
          </div>
          <div>
            <label htmlFor="firstDayDegree">From:</label>
            <input type={"date"} name="firstDayDegree" id="firstDayDegree"></input>
          </div>
          <div>
            <label htmlFor="lastDayDegree">To:</label>
            <input type={"date"} name="lastDayDegree" id="lastDayDegree"></input>
          </div>
        </form>
        <div className="btn-wr">
          <button type="button" className="delete-btn">Delete</button>
          <button type="button" className="add-btn">Add</button>
        </div>
      </section>
    )
  }
}
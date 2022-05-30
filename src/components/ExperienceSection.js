import React from "react";

export default class ExperienceSection extends React.Component {
  render () {
    return (
      <section>
        <div className="sectionTitle">Experience</div>
        <form>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input type={"text"} placeholder="Microsoft" name="companyName" id="companyName"></input>
          </div>
          <div>
            <label htmlFor="companyPosition">Position Title</label>
            <input type={"text"} placeholder="Senior Developer" name="companyPosition" id="companyPosition"></input>
          </div>
          <div>
            <label htmlFor="firstDayJob">From:</label>
            <input type={"date"} name="firstDayJob" id="firstDayJob"></input>
          </div>
          <div>
            <label htmlFor="lastDayJob">To:</label>
            <input type={"date"} name="lastDayJob" id="lastDayJob"></input>
          </div>
        </form>
        <div className="btn-wr">
          <button type="button">Delete</button>
          <button type="button">Add</button>
        </div>

      </section>
    )
  }
}
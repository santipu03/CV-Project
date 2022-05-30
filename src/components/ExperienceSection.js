import React from "react";
import ExperienceItems from "./ExperienceItems";
import uniqid from 'uniqid'

export default class ExperienceSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      experience: [{
        id: uniqid(),
        companyName: '',
        companyPosition: '',
        firstDayJob: '',
        lastDayJob: ''
      }],
    }
  }

  handleAddExperience () {
    this.setState(previousState => ({
      experience: [...previousState.experience, {
        id: uniqid(),
        companyName: '',
        companyPosition: '',
        firstDayJob: '',
        lastDayJob: ''
      }]
    }))
  }

  

  render () {
    const experienceItems = this.state.experience.map(item => (
      <ExperienceItems 
        id={item.id}
        companyName={item.companyName}
        companyPosition={item.companyPosition}
        firstDayJob={item.firstDayJob}
        lastDayJob={item.lastDayJob}
      />
    ))

    return (
      <section>
        <div className="sectionTitle">Experience</div>
          {experienceItems}
        <div className="btn-wr add-btn-wr">
          <button type="button" className="add-btn" onClick={this.handleAddExperience.bind(this)}>Add</button>
        </div>

      </section>
    )
  }
}
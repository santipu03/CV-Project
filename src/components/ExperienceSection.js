import React from "react";
import ExperienceItems from "./ExperienceItems";
import uniqid from 'uniqid'
import { Button } from "./Utils/Button";

export default class ExperienceSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      experience: []
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

  handleDeleteExperience (id) {
    this.setState(previousState => ({
      experience: previousState.experience.filter(item => item.id !== id)
    }))
  }

  handleInputChange (e, id) {
    this.setState(prevState => {
      const newArray = prevState.experience.map(item => {
        if (item.id === id) {
          return {...item, [e.target.id]: e.target.value}
        }
        return item
      })
      return {...prevState, experience: [...newArray]}
    })
  }

  render () {
    const experienceItems = this.state.experience.map(item => (
      <ExperienceItems 
        key={item.id}
        id={item.id}
        companyName={item.companyName}
        companyPosition={item.companyPosition}
        firstDayJob={item.firstDayJob}
        lastDayJob={item.lastDayJob}
        isSubmitted={this.props.isSubmitted}
        onDeleteItem={this.handleDeleteExperience.bind(this)}
        onInputChange={this.handleInputChange.bind(this)}
      />
    ))

    if (!this.props.isSubmitted) {
      return (
        <section>
          <div className="sectionTitle">Experience</div>
            {experienceItems}
          <div className="btn-wr add-btn-wr">
            <Button 
              type="button" 
              onClick={this.handleAddExperience.bind(this)}
              color='#93c5fd'
              backgroundColor='#60a5fa'>
            Add</Button>
          </div>
  
        </section>
      )
    } else {
      return (
        <section>
          <div className="sectionTitle">Experience</div>
            {experienceItems}
        </section>
      )
    }
  }
}
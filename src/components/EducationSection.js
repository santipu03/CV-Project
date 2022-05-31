import React from "react";
import EducationItem from "./EducationItem";
import uniqid from 'uniqid'
import { Button } from "./Utils/Button";

export default class EducationSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      education: []
    }
  }

  handleAddEducation () {
    this.setState(prevState => ({
      education: [...prevState.education, {
        id: uniqid(),
        schoolName: '',
        degree: '',
        firstDayDegree: '',
        lastDayDegree: ''
      }]
    }))
  }

  handleDeleteEducation (id) {
    this.setState(prevState => ({
      education: prevState.education.filter(item => item.id !== id)
    }))
  }

  handleInputChange (e, id) {
    this.setState(prevState => {
      const newArray = prevState.education.map(item => {
        if (item.id === id) {
          return {...item, [e.target.id]: e.target.value}
        }
        return item
      })
      return {...prevState, education: [...newArray]}
    })
  }

  render () {
    const educationItems = this.state.education.map(item => (
      <EducationItem
        key={item.id}
        id={item.id}
        schoolName={item.schoolName}
        degree={item.degree}
        firstDayDegree={item.firstDayDegree}
        lastDayDegree={item.lastDayDegree}
        isSubmitted={this.props.isSubmitted}
        onInputChange={this.handleInputChange.bind(this)}
        onDeleteItem={this.handleDeleteEducation.bind(this)}
      />
    ))

    if (!this.props.isSubmitted){
      return (
        <section>
          <div className="sectionTitle">Education</div>
          {educationItems}
          <div className="btn-wr add-btn-wr">
            <Button 
              type="button" 
              onClick={this.handleAddEducation.bind(this)}
              color='#93c5fd'
              backgroundColor='#60a5fa'>
            Add</Button>
          </div>
        </section>
      )
    } else {
      return (
        <section>
          <div className="sectionTitle">Education</div>
          {educationItems}
        </section>
      )
    }
  }
}
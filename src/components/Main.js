import React from 'react'
import GeneralSection from './GeneralSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import CardFooter from './CardFooter'
import { Card } from './Styles/Card.style'
import { MainContainer } from './Styles/MainContainer.style'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmitted: false
    }
  }

  handleSubmit () {
    this.setState((previousState) => ({
      isSubmitted: !previousState.isSubmitted
    }))
  }

  render () {
    return (
      <MainContainer>
        <Card>
          <GeneralSection isSubmitted={this.state.isSubmitted} />
          <ExperienceSection isSubmitted={this.state.isSubmitted} />
          <EducationSection isSubmitted={this.state.isSubmitted} />
          <CardFooter
            onSubmitBtn={this.handleSubmit.bind(this)}
            isSubmitted={this.state.isSubmitted}
          />
        </Card>
      </MainContainer>
    )
  }
}

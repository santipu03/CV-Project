import React from "react";
import GeneralSection from "./GeneralSection";
import ExperienceSection from "./ExperienceSection";
//import EducationSection from "./EducationSection";
import CardFooter from "./CardFooter";

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmitted: false
    }
  }

  handleSubmit () {
    this.setState(previousState => ({
      isSubmitted: (previousState.isSubmitted ? false : true)
    }))
  }

  render() {
    return (
      <main>
        <div className="card">
          <GeneralSection 
            isSubmitted={this.state.isSubmitted}
          />
          <ExperienceSection 
            isSubmitted={this.state.isSubmitted}
          />
          {/*<EducationSection />  */}
          <CardFooter 
            onSubmitBtn={this.handleSubmit.bind(this)}
            isSubmitted={this.state.isSubmitted}
          />
        </div>
      </main>
    )
  }
}
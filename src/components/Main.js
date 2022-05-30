import React from "react";
import GeneralSection from "./GeneralSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="card">
          <GeneralSection />
          <ExperienceSection />
          <EducationSection /> 
        </div>
      </main>
    )
  }
}
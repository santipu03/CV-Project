import React from "react";

export default class GeneralSection extends React.Component {
  render () {
    return (
      <section>
        <div className="sectionTitle firstSectionTitle">General Information</div>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type={"text"} placeholder="Adam" name="firstName" id="firstName"></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type={"text"} placeholder="Smith" name="lastName" id="lastName"></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type={"email"} placeholder="adamsmith@gmail.com" name="email" id="email"></input>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type={"number"} placeholder="686354264" name="phoneNumber" id="phoneNumber"></input>
          </div>
          <div className="textarea-wr">
            <label htmlFor="description">Description</label>
            <textarea placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects." name="description" id="description"></textarea>
          </div>
        </form>
      </section>
    )
  }
}
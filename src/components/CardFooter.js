import React from "react";

export default class CardFooter extends React.Component {
  render () {
    if (this.props.isSubmitted) {
      return (
        <div className="btn-wr card-footer">
          <button type="button" className="edit-btn" onClick={this.props.onSubmitBtn}>Edit</button>
        </div>
      )
    } else {
      return (
        <div className="btn-wr card-footer">
          <button type="button" className="submit-btn" onClick={this.props.onSubmitBtn}>Submit</button>     
        </div>
      )
    }
  }
}
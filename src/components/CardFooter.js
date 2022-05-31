import React from "react";
import { Button } from "./Utils/Button";

export default class CardFooter extends React.Component {
  render () {
    if (this.props.isSubmitted) {
      return (
        <div className="btn-wr card-footer">
          <Button 
            type="button" 
            onClick={this.props.onSubmitBtn}
            color='#fdba74'
            backgroundColor='#fb923c'
          >Edit</Button>
        </div>
      )
    } else {
      return (
        <div className="btn-wr card-footer">
          <Button 
            type="button" 
            onClick={this.props.onSubmitBtn}
            color='#86efac'
            backgroundColor='#4ade80'
          >Submit
          </Button>     
        </div>
      )
    }
  }
}
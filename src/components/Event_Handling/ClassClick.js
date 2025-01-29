import React, { Component } from 'react'

export class ClassClick extends Component {
  eventHandler() {
    console.log("ClassEvent CLicked");

  }
  render() {
    return (
      <>
        <button onClick={this.eventHandler}>ClassEvent</button>
      </>
    )
  }
}

export default ClassClick
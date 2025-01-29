import React, { Component } from 'react'

export default class State_setState extends Component {
   
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }

    
  }

  increment = ()=>{
    // this.setState({
    //   count: this.state.count+1
    // },()=>{
    //   console.log("Callback Value", this.state.count);
    // })

    this.setState((prev)=> ({
      count: prev.count + 1
    }), ()=>{
      console.log("Callback Value", this.state.count);
    })
    console.log(this.state.count);
  }

  incrementFive=()=>{
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.incrementFive}>increment</button>
      </>
    )
  }
}

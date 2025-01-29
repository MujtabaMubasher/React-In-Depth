import React, { Component } from 'react'
import State_setState from './components/State_setState'
import FunctionClick from './components/Event_Handling/FunctionClick'
import ClassClick from './components/Event_Handling/ClassClick'

export default class App extends Component {
  render() {
    return (
      <>
         {/* <State_setState/> */}
         <FunctionClick/>
         <ClassClick/>
      </>
    )
  }
}

import React from 'react'

function FunctionClick() {
    function eventHandler(){
      console.log("Function Event Clicked");
        
    }
  return (
    <>
       <button onClick={eventHandler}>FunClicked</button>
    </>
  )
}

export default FunctionClick
import React from "react";

export default class CoordinatesButton extends React.Component 
{
  
  
  render()
  {
    return (<button onClick={(e) => {
      let array = [e.ClientX,e.ClientY];
    }}></button>)
  }
}
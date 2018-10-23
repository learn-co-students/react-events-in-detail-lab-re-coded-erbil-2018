// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
    onReceive= (event)=>{
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <button onClick={this.onReceive}>Coord</button>
        )
    }
}

export default CoordinatesButton;
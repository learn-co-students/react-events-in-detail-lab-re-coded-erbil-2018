// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {
  clicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clicked}>Cordinates</button>
    );
  }
}

export default CoordinatesButton
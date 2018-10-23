// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    onDelayClick = (event)=>{
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    

    render(){
        return(
            <button onClick={this.onDelayClick}>Delayed</button>
        )
    }
}

export default DelayedButton;



// import React from 'react';

// class DelayedButton extends React.Component {
//   handleClick = (event) => {
//     event.persist();
//     setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>Delayed</button>
//     );
//   }
// }

// export default DelayedButton;
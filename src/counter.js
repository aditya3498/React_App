import React from 'react'
//import Button from 'react-bootstrap/Button'
import history from './history'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  // change code above this line
  render() { 
    const mystyle={
          "textAlign": "center",
          "paddingTop": "350px"
        }
  	return(
  	<div style = {mystyle}>
   	<button className='inc' onClick={(e) => this.increment(e)}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button className='dec' onClick={(e) => this.decrement(e)}>Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
    <h1>Current Count: {this.state.count}</h1>
    <button className='NextPage' onClick={() => history.push('/time')}>Next Page </button>
  	</div>	
  	);
  } 
};

export default Counter
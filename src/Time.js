import React from 'react'
import './index.css'
import history from './history'

class Time extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString(),
          x: history.location
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }

      Back(){
        history.goBack();
        this.setState({
          x: history.location
        })
      }

      Forward(){
       history.goForward();
        this.setState({
          x: history.location
        })
        history.push('/data'); 
      }
      
      render() {
        const mystyle={
          "textAlign": "center",
          "paddingTop": "350px"
        }
        return (
          <div style = {mystyle}>
            <p><strong>The Time is {this.state.time}</strong></p>
            <button className='PreviousPage' onClick={() => this.Back()}>Previous Page</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='NewPage' onClick={() => this.Forward()}>Next Page</button>
          </div>
        );
      }
    }

export default Time
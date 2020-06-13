import React, { Component } from "react";
import ReactDOM from "react-dom";
import history from './history'

class CallApi extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      isLoaded: false,
      x: history.location
    }
  }

  componentDidMount() {
    fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
      .then(res => res.json())
      .then((findresponse) => {
        console.log(findresponse)
        this.setState({
          isLoaded: true,
          data: findresponse,
        })
      }) 
  }

  Back()
  {
    history.goBack();
    this.setState({
    x: history.location
    })
  }
  
  Forward()
  {
    history.goForward();
    this.setState({
    x: history.location
    })
    history.push('/currency'); 
  }

  render() {
    const mystyle={
          "textAlign": "center",
          "paddingTop": "350px"
        }
    const newstyle={
      "textAlign": "center",
      "paddingTop": "0px"
    }
    var {isLoaded, data} = this.state;

    if(!isLoaded){
      return <div style = {mystyle}> Loading ... </div>;
    }

    else{
      return [
        <div>
          <ul>
            {data.map(item => (
              <li key={item.email}>
                Name: {item.first}  {item.last}
              </li>
            ))}
          </ul>
        </div>,
        <div style = {newstyle}>
          <button className='PreviousPage' onClick={() => this.Back()}>Previous Page</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='NewPage' onClick={() => this.Forward()}>Next Page</button>
        </div>
      ];
    } 
  }
}

export default CallApi
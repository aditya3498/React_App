import React from "react";
import axios from "axios";
//import converter from "./converter.css";
import history from './history'

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      errormessage: null,
      fromCurrency: "USD",
      toCurrency: "XCD",
      amount: 0,
      currencies: []
    };
  }

  componentDidMount() {
    var currency = ['XCD', 'EUR', 'GEL', 'HTG', 'INR', 'ILS', 'KZT', 'KWD', 'LSL', 'USD']
    this.setState({
      currencies: currency
    })
  }

  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      //console.log(this.state.fromCurrency)
      //console.log(this.state.toCurrency)
      //https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=dd8e835c3d0a875afe5e for USD to INR
      axios
        .get(
          `https://free.currconv.com/api/v7/convert?q=${this.state.fromCurrency}_${this.state.toCurrency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`)
        .then(response => {
          console.log(response)
          const result = this.state.amount * response.data[this.state.fromCurrency + "_" + this.state.toCurrency];
          //const result = 0
          //console.log(response.data[this.state.fromCurrency + "_" + this.state.toCurrency])
          this.setState({ result: result.toFixed(3) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } 
    else {
      this.setState({errormessage: "You cant convert the same currency!" });
      console.log(this.state.errormessage)
    }
  };

  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };

  Back()
  {
    history.goBack();
    this.setState({
    x: history.location
    })
  }
  
  Home()
  {
    //history.goForward();
    history.go(-3);
    this.setState({
      x: history.location
    })
  }

  render() {
    const mystyle={
          "textAlign": "center",
          "paddingTop": "250px"
        }
    const newstyle={
      "paddingTop": "30px"
    }
    return (
      <div style= {mystyle}>
        <p>
          Currency Converter
        </p>
        <div>
          <input name="amount" type="text" value={this.state.amount} onChange={event => this.setState({ amount: event.target.value })}
          />&nbsp;&nbsp;&nbsp;
          <select name="from" onChange={event => this.selectHandler(event)} value={this.state.fromCurrency}>
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))} 
          </select>&nbsp; &nbsp; &nbsp;
          <select
            name="to" onChange={event => this.selectHandler(event)} value={this.state.toCurrency}>
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))} 
          </select>&nbsp; &nbsp; &nbsp;
        </div>
        <div style={newstyle}>
          <button onClick={this.convertHandler}>Convert</button>
          {this.state.result && <p> {this.state.amount} {this.state.fromCurrency} equals <strong>{this.state.result}</strong> {this.state.toCurrency} </p>}
        </div>
        <div style = {newstyle}>
          <button className='PreviousPage' onClick={() => this.Back()}>Previous Page</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='HomePage' onClick={() => this.Home()}>Home Page</button>
        </div>
      </div>
    );
  }
}

export default Converter;
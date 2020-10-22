import React, { Component } from "react";
import './App.css'

export default class App_Class extends Component {

    state = {
      count: {
          name:"",
          ss:""
      },
      show:false
    };
  
  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.Inc}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

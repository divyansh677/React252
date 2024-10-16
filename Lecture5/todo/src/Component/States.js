import React, { Component } from 'react';

export default class States extends Component {
  constructor() {
    super();
    this.state = {
      name: "dev",
      age: 21,
    };

    // Create a copy of the initial state for reset purposes
    this.initialState = { ...this.state };
  }

  handleChange = () => {
    this.setState({
      name: "raj",
      age: 30,
    });
  };

  handleReset = () => {
    this.setState(this.initialState); // Reset state to initial values
  };

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <button onClick={this.handleChange}>Change State</button>
        <button onClick={this.handleReset}>Reset State</button>
      </div>
    );
  }
}

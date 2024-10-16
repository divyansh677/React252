import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props)
    {
        super(props);
        this.name = props.name;
        
    }

    display()
    {
        return (this.name);
    }
  render() {
    return (
     
        <h1> {this.display}</h1>
     
    )
  }
}

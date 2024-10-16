import React, { Component } from 'react'

export default class Ques extends Component {
    constructor()
    {
        super();
        this.array =  [20,21,22,23,24,25,26,27,28,29,30];

    }

  render() {
    let arr = [20,21,22,23,24,25,26,27,28,29,30];
    return (
      <div>

        {/* <h1> Normal Values Stored in array</h1>
        {
            arr.map((i)=>(
                <span>{i}</span>

            ))

        }

        <h1> Values of Array Afer Performing some operation </h1>
        {
            arr.map((i)=>(
                  <span>{i +" , " }</span>      
            ))
        } */}

        {/* <h1> {this.array}</h1>
        <h1> {this.array.join(" ,")}</h1> */}

        


        
      </div>
    )
  }
}

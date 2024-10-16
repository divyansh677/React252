import React, { Component } from 'react'

export default class First extends Component {

  constructor()
  {
    super();
    this.state = {
      count : 0 ,
    }
  }
  render() {
    return (

     <React.Fragment>
<div  class="text-center m-3">
      <h1 style={{margin:"15px"}}> {this.state.count}</h1>

      <button onClick={this.increase} class="ml-3"> + </button>
      <button onClick={this.decrease} class="m-3"> -</button>
<button onClick={this.handleReset}>Reset</button>
</div>




     </React.Fragment>
    )
  }

  increase = ()=>{
    this.setState({
      count : this.state.count+1,
    })
  }

  decrease = ()=>{

    this.setState({
      count : this.state.count-1,
    })

  }

  handleReset = ()=>{
    this.setState({
      count : this.state.count = 0,
    })
  }


}


// rcc - react class component 
// rfc - react functional component 
// babel 
// bundler  --> vite


// return is used to render the content on the window like wise console.log  is used to write on the console
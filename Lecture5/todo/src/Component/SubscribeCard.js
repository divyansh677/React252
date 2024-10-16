import React, { Component } from 'react'

export default class SubscribeCard extends Component {
    constructor()
    {
       super();
       this.state = {
        isSubscribed : false,
       }
    }

    handleSub =()=>{
      this.setState({isSubscribed:true});
    }
  render() {
    return (
      <div>
        
        <div> <button onClick ={this.handleSub}>Subscribe</button> </div> 
        <div>   {
          this.state.isSubscribed ? "Hurrrh Subscribed" : "😒Not Subscribed😒 "
        }</div>
      
        
      </div>
    )
  }
}

import React, { Component } from 'react'

 class Poll extends Component {
     constructor(props){
         super(props);

         this.state = {
             pollTeams:''
         }
     }
  render() {
    return (
      <div className='home_poll'>
        <h3>Who will be the next champion</h3>
      </div>
    )
  }
}


export default Poll;
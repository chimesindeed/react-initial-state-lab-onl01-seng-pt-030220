// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  
  render = () => {
    return (
      this.state.seconds left > 0
      ? 
      return `${this.state.secondsLeft} before I go boom!`
      :
      )
  }
}
export default Bomb
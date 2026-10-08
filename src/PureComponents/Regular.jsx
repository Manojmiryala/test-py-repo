import  { Component } from 'react'

export default class Regular extends Component {
    constructor(){
    super()
    this.state ={
        name:"Arun"
    }
}  
  render() {
    console.log("Regular Components Rendering...")
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Ravi"})}>Regular Components</button>
      </div>
    )
  }
}
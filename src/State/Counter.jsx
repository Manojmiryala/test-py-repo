import  { Component } from 'react'
class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <buttton onClick={()=>this.setState({count:this.state.count+1})}>Increment </buttton>
         <buttton onClick={()=>this.setState({count:this.state.count-1})}>Decrement </buttton>
         <buttton onClick={()=>this.setState({count:0})}>Reset</buttton>
      </div>
    )
  }
}
export default Counter

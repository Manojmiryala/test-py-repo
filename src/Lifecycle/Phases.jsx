import { Component } from 'react'

class Phases extends Component {
    constructor(){
        super()
        console.log("Constructor Method Triggered");
        this.state={
            salary:10000
        }
        
    }
    componentDidMount(){
        console.log("Componrmnt Did Mount Method Triggered...");
        
    }
    componentDidUpdate(){
        console.log("Component Did Update Method triggered...");
        
    }
  render() {
    console.log("Render Method triggered");
    
    return (
      <div>
        <h1> Salary{this.state.salary}</h1>
       <button onClick={()=>this.setState({salary:this.state.salary+10000})}>
      Increment Salary </button>
      </div>
    )
  }
}
export default Phases
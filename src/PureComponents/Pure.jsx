import { PureComponent } from 'react'


export default class Pure extends PureComponent{
    constructor(){
        super()
        this.state={
            name:"Manoj"
        }
    }
 render(){
    console.log("Pure Componenents Rendering...");
  return (
    <div>
        <h1> Name :{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Monty"})}>PureComponent</button>
    </div>
  )
}
}

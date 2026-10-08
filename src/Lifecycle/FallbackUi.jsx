import  { Component } from 'react'
class FallbackUi extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error,info){
console.log(error);
console.log(info);
this.setState({
    hasError:true
})
    }
  render() {
    if(this.state.hasError){
        return<h1> Something went Wrong</h1>
    }
    return this.props.children
  }
}
export default FallbackUi
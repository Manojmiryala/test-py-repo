import { Component } from 'react'
 class Unmount extends Component {
    componentWillUnmount(){
        console.log("Component will unmounnt method triggered...")
    }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
export default Unmount
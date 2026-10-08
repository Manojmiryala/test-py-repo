// import { useRef } from "react"

// const Reference = () => {
//     let inputRef = useRef(null)
//     let handleFocus = ()=>{
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={handleFocus}>Click on Focus</button>
//     </div>
//   )
// }

// export default Reference


//Example 2(set the value of input)

// import {useRef} from 'react'

// const Reference = () => {
//   let inputRef=useRef(null)
//   let handleValue=()=>{
//     inputRef.current.value="Manoj"
//     inputRef.current.style.background="aqua"
//   }
//   return (
//     <div>
// <input type='text' ref={inputRef}/>
// <button onClick={handleValue}> Set value</button>
//     </div>
//   )
// }

// export default Reference



//Example :3

import {useRef} from 'react'

const Reference = () => {
  let count=useRef(0)
  let handleCount=()=>{
    count.current++
    console.log(count.current);
    
  }
  return (
    <div>
      <button onClick={handleCount}> Count Increment</button>
    </div>
  )
}

export default Reference
import { useState } from 'react'

const Counter = () => {
    let [Count,setCount]=useActionState(0)
    let handleIncrement=()=>{
       setCount(count+1)
    }
     let handleDecrement=()=>{
       setCount(count-1)
    }
     let handleReset=()=>{
       setCount(0)
    }
  return (  
    <div>
        <h1>0</h1>
        <buttuon onlick ={handleIncrement}>Increment</buttuon>
        <buttuon onlick ={handleDecrement}>Decrement</buttuon>
        <buttuon onlick ={handleReset}>Reset</buttuon>
    </div>
  )
}

export default Counter
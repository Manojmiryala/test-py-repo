import {useState} from 'react'
const Theme = () => {
    let [isLightTheme, setIsLightTheme]=useState(true)
    let handleTheme=()=>{
        setIsLightTheme(!isLightTheme)
    }
  return (
    <div>T
        <h1> Theme:{isLightTheme ? "Light":"Dark"}</h1>
        <button onClick={handleTheme}> {isLightTheme?"Dark Theme":"LightTheme"}</button>
    </div>
  )
}

export default Theme
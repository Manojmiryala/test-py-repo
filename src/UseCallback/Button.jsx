
const Button = ({text,fun}) => {
    console.log(`Increment $ {text} Rendering.....`) 
  return (
<button onClick={fun}> Increment {text}</button>
  )
}

export default Button
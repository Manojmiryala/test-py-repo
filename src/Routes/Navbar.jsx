import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About"> About</NavLink>
        <NavLink to="/contact"> Contact</NavLink>
        <NavLink to="/student/1/monty/monty@gmail.com">Monty</NavLink>
        <NavLink to="/student/2/pavan/pavan@gmail.com">pavan</NavLink>
        <NavLink to="/student/3/manoj/manoj@gmail.com">Manoj</NavLink>

    </nav>
     
  )
}

export default Navbar
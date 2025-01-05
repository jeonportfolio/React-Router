import { Link, NavLink, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>
        <h1>About Page</h1>
        <Link to="/about">About</Link>
        <br/>
        <NavLink to="me" style={({isActive}) => ({
          fontSize: isActive ? "25px" : "16px",
          color: isActive ? "red" : "lime",
        })}>Me
        </NavLink>
        <Outlet/>
    </div>
  )
}

export default About
import { Link, NavLink, useLoaderData } from "react-router-dom"

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
        <h1>Home Page</h1>
        <div>{data}</div>
        <Link to="/about">About</Link>
        <br/>
        <NavLink to="/about/me" style={({isActive}) => ({
          fontSize: isActive ? "25px" : "16px",
          color: isActive ? "red" : "lime",
        })}>Me</NavLink>
    </div>
  )
}

export default Home
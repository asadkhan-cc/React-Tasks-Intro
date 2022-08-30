import React from 'react'
import { Link } from "react-router-dom";
import Counter from "./Counter";
const Home = () => {
  return (
    <div>
        <h1>Home Screen</h1>
        <p>tada</p>
        <Link to="/">Login</Link>
        <hr />
        <Counter></Counter>

    </div>
  )
}

export default Home
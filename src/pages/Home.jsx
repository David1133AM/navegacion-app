import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div>Home</div>
        <ul>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/details">Detalles</Link></li>
            <li><Link to="/counter">Contador</Link></li>
        </ul>
    </>
    
  )
}

export default Home
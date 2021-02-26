import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/Home'>Home</Link>
        </li>
        <li>
          <Link to='/SearchPlants'>View All Plants</Link>
        </li>
        <li>
          <Link to='/UserSearchPlants'>Search Plants</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

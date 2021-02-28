import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, NavbarToggler, Collapse } from 'reactstrap'
import { TopNav } from '../components/styled'

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    let newIsOpen = !isOpen
    setIsOpen(newIsOpen)
  }
  return (
    <div>
      <TopNav>
        <li>
          <Link to='/Dashboard'>My Garden</Link>
        </li>
        <li>
          <Link to='/SearchPlants'>View All Plants</Link>
        </li>
        <li>
          <Link to='/UserSearchPlants'>Search Plants</Link>
        </li>
        <Button color='info' onClick={props.clearToken}>
          Logout
        </Button>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}></Collapse>
      </TopNav>
    </div>
  )
}

export default Navbar

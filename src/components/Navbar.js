import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, NavHeader } from '../components/styled'

const Toggler = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState('')
  console.log(props.token)
  const toggle = () => {
    let newIsOpen = !isOpen
    setIsOpen(newIsOpen)
  }

  function getUser() {
    const user = JSON.parse(localStorage.getItem('user'))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <NavHeader>
        <div href='/'>iPlants.com</div>
        <h1>Welcome, {user.firstName}</h1>
        {/* <NavbarToggler onClick={toggle} className='mr-2' /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
        <ul>
          <li>
            <Link to='/Dashboard'>My Garden</Link>
          </li>
          <li>
            <Link to='/SearchPlants'>View All Plants</Link>
          </li>
          <li>
            <Link to='/UserSearchPlants'>Search Plants</Link>
          </li>
          <Button primary onClick={props.clearToken}>
            Logout
          </Button>
        </ul>
        {/* </Collapse> */}
      </NavHeader>
    </div>
  )
}

export default Toggler

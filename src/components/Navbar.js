import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, NavHeader } from '../components/styled'

const Toggler = props => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(props.token)
  const toggle = () => {
    let newIsOpen = !isOpen
    setIsOpen(newIsOpen)
  }

  return (
    <div>
      <NavHeader>
        <div href='/'>iPlants.com</div>
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

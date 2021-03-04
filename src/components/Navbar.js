import React, { useState } from 'react'
import { Button, NavHeader } from '../components/styled'
<<<<<<< HEAD
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchPlants from "./SearchPlants";
import UserSearchPlants from "./UserSearchPlants";
import FlowerSearch from "./FlowerSearch";
import PlantIndex from "./PlantIndex";
=======
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import SearchPlants from './SearchPlants'
import UserSearchPlants from './UserSearchPlants'
import FlowerSearch from './FlowerSearch'
import PlantIndex from './PlantIndex'
import SearchHeight from '../components/SearchHeight'
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7
// import {Button, NavbarToggler, Collapse} from 'reactstrap';

const Toggler = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    let newIsOpen = !isOpen
    setIsOpen(newIsOpen)
  }

  return (
    <div>
      <NavHeader>
        {/* <NavbarToggler onClick={toggle} className='mr-2' /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
        <ul>
          <div href='/'>iPlants.com</div>
          <li>
            <Link to='/Dashboard'>My Garden</Link>
          </li>
          <li>
            <Link to='/SearchPlants'>View All Plants</Link>
          </li>
          <li>
            <Link to='/UserSearchPlants'>Search Plants</Link>
          </li>
          <li>
            <Link to='/FlowerSearch'>Flower Search</Link>
          </li>
          <li>
            <Link to='/SearchHeight'>Search Height</Link>
          </li>
          <li>
            <Link to='/DurationSearch'>Search Duration</Link>
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

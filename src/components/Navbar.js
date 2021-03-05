import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SearchPlants from './SearchPlants';
import UserSearchPlants from './UserSearchPlants';
import FlowerSearch from './FlowerSearch';
import PlantIndex from './PlantIndex';
import { Button, NavbarToggler, Collapse } from 'reactstrap';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
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
            <Link to='/PlantIndex'>Explore Plants</Link>
          </li>
          <li>
            <Link to='/DurationSearch'>Search Duration</Link>
          </li>
          <Button primary onClick={props.clearToken}>
            Logout
          </Button>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen}></Collapse>
        </ul>
      </NavHeader>
    </div>
  );
};

export default Navbar;

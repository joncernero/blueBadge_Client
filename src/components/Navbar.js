import React, {useState} from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SearchPlants from "./SearchPlants";
import UserSearchPlants from "./UserSearchPlants";
import FlowerSearch from "./FlowerSearch";
import Home from "./Home";
import {Button, NavbarToggler, Collapse} from 'reactstrap';




const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        let newIsOpen = !isOpen 
        setIsOpen(newIsOpen)
    }
    return ( 
        <div>

        <div>
            <ul>
                <li><Link to="/Dashboard">My Garden</Link></li>
                <li><Link to="/SearchPlants">View All Plants</Link></li>
                <li><Link to="/UserSearchPlants">Search Plants</Link></li>
                <li><Link to ="/FlowerSearch">Search By Flower Color</Link></li>
                <Button  color='info' onClick={props.clearToken}>Logout</Button>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen}>
                </Collapse>
            </ul>
        </div>
        
        </div>
     );
}
 
export default Navbar;
import React, {useState} from "react";
import {Link} from 'react-router-dom';
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
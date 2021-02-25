import React from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SearchPlants from "./SearchPlants";
import UserSearchPlants from "./UserSearchPlants";
import Home from "./Home";
import {Button} from 'reactstrap';




const Navbar = (props) => {
    return ( 
        <div>
               <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/SearchPlants">View All Plants</Link></li>
                <li><Link to="/UserSearchPlants">Search Plants</Link></li>
            </ul>
        </div>
        <div>
     
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/searchplants"><SearchPlants /></Route>
                <Route exact path="/usersearchplants"><UserSearchPlants /></Route>
                
            </Switch>
            <Button  color='info' onClick={props.clearToken}>Logout</Button>
        </div>
        </BrowserRouter>
        </div>
     );
}
 
export default Navbar;
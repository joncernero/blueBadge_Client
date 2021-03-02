import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Dashboard from "./Dashboard";
import UserSearchPlants from "./UserSearchPlants";
import SearchPlants from "./SearchPlants";

const Sidebar = (props) => {
    return ( 
<div>
    <div>
        <ul>
            <li><Link to="/UserSearchPlants">Search</Link></li>
            <li><Link to="/SearchPlants">View All</Link></li>
        </ul>
    </div>
    <div>
        <Switch>
            <Route exact path="/UserSearchPlants"><UserSearchPlants token={props.token}/></Route>
            <Route exact path="/SearchPlants"><SearchPlants token={props.token}/></Route>
        </Switch>
    </div>
</div>

     );
}
 
export default Sidebar;
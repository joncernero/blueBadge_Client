import React, { useState, useEffect } from 'react';
import SearchPlants from "./SearchPlants";
import UserSearchPlants from "./UserSearchPlants";
import FlowerSearch from "./FlowerSearch";
import SearchHeight from "./SearchHeight";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const PlantIndex = (props) => {
    return ( 
        <BrowserRouter>
<div>
<div>
    <ul>
        <li><Link to="/UserSearchPlants">Search by Plant Name</Link></li>
        <li><Link to="/FlowerSearch">Search by Flower Color</Link></li>
        <li><Link to="/SearchPlants">View Plants Alphabetically</Link></li>
        <li><Link to="/SearchHeight">Search By Height</Link></li>
    </ul>
</div>
<div>
<Switch>
<Route exact path="/UserSearchPlants"><UserSearchPlants token={props.token}/></Route>
<Route exact path="/FlowerSearch"><FlowerSearch token={props.token}/></Route>
<Route exact path="/SearchPlants"><SearchPlants token={props.token}/></Route>
<Route exact path="/SearchHeight"><SearchHeight token={props.token}/></Route>
</Switch>
</div>
</div>
</BrowserRouter>
     );
}
 
export default PlantIndex;

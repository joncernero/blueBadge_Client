import React, { useState, useEffect } from 'react';
import SearchPlants from './SearchPlants';
import UserSearchPlants from './UserSearchPlants';
import FlowerSearch from './FlowerSearch';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const PlantIndex = (props) => {
  <Switch>
    <Route exact path='/UserSearchPlants'>
      <UserSearchPlants token={props.token} />
    </Route>
    <Route exact path='/FlowerSearch'>
      <FlowerSearch token={props.token} />
    </Route>
    <Route exact path='/SearchPlants'>
      <SearchPlants token={props.token} />
    </Route>
  </Switch>;
  return (
    <div>
      <ul>
        <li>
          <Link to='/UserSearchPlants'>Search by Plant Name</Link>
        </li>
        <li>
          <Link to='/FlowerSearch'>Search by Flower Color</Link>
        </li>
        <li>
          <Link to='/SearchPlants'>View Plants Alphabetically</Link>
        </li>
      </ul>
    </div>
  );
};

export default PlantIndex;

// took out extra divs in return bls

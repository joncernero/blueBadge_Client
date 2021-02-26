import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchPlants from './SearchPlants'
import UserSearchPlants from './UserSearchPlants'
import Home from './Home'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

const AuthenticatedRouter = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/searchplants'>
          <SearchPlants />
        </Route>
        <Route exact path='/usersearchplants'>
          <UserSearchPlants />
        </Route>
      </Switch>
    </div>
  )
}

export default AuthenticatedRouter

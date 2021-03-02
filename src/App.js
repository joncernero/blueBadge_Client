import "./App.css";
import styled from "styled-components";
import { Wrapper, Container } from "./components/styled/";
import Auth from "./components/Auth/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SearchPlants from "./components/SearchPlants";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import UserSearchPlants from "./components/UserSearchPlants";
import FlowerSearch from "./components/FlowerSearch";
import PlantIndex from "./components/PlantIndex";

function App() {
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token'));
    setSessionToken(localStorage.getItem('token'))
  }, [])

  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(sessionToken)
  }

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }

  const protectedViews = pageToShow => {
    let component
    if (pageToShow === 'dashboard') {
      component = <Dashboard token={sessionToken} />
    }
    if (pageToShow === 'UserSearchPlants') {
      component = <UserSearchPlants token={sessionToken} />
    }
    if (pageToShow === 'SearchPlants') {
      component = <SearchPlants token={sessionToken} />
    }
    let x = localStorage.getItem('token')

    return localStorage.getItem('token') ? (
      // <Dashboard token={sessionToken} />
      component
    ) : (
      <Redirect to='/' />
    )
  }
  console.log(sessionToken)

  return (
    <div className='main'>
      <Router>
        {sessionToken ? <Navbar clearToken={clearToken} /> : null}
        <Switch>
          <Route exact path='/dashboard'>
            {protectedViews('dashboard')}
          </Route>
          <Route exact path='/UserSearchPlants'>
            {protectedViews('UserSearchPlants')}
          </Route>
          <Route exact path='/SearchPlants'>
            {protectedViews('SearchPlants')}
          </Route>
          <Route exact path='/'>
            {sessionToken ? (
              <Redirect to='/dashboard' />
            ) : (
              <Auth updateToken={updateToken} />
            )}
          {/*<Route exact path="/FlowerSearch">
            <FlowerSearch token={sessionToken}/>
          </Route> */}
          {/* <Route exact path="/PlantIndex">
            <PlantIndex token={sessionToken}/>
          </Route> */}
          <Route exact path="/">
            <Auth updateToken={updateToken}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App

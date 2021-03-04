import './App.css'
import styled from 'styled-components'
import { Wrapper, Container } from './components/styled/'
import Auth from './components/Auth/index'
import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import SearchPlants from './components/SearchPlants'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import UserSearchPlants from './components/UserSearchPlants'
import FlowerSearch from './components/FlowerSearch'
import SearchHeight from "./components/SearchHeight"
import PlantIndex from './components/PlantIndex'
import DurationSearch from "./components/DurationSearch"


function App() {
  const [sessionToken, setSessionToken] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token'));
    setSessionToken(localStorage.getItem('token'))
  }, [])

  const updateToken = (newToken, newUserName) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    setUserName(newUserName)
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
    if (pageToShow === 'FlowerSearch') {
      component = <FlowerSearch token={sessionToken} />
    }
    if (pageToShow === 'SearchHeight') {
      component = <SearchHeight token={sessionToken} />
    }
    if (pageToShow === 'DurationSearch') {
      component = <DurationSearch token={sessionToken} />
    }


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
              <Auth updateToken={updateToken} setUserName={setUserName} />
            )}
          </Route>
          <Route exact path='/FlowerSearch'>
            {protectedViews('FlowerSearch')}
          </Route>
          <Route exact path='/SearchHeight'>
            {protectedViews('SearchHeight')}
          </Route>
          <Route exact path='/DurationSearch'>
            {protectedViews('DurationSearch')}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App

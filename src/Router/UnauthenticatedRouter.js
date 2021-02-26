import React from 'react'
import { Route } from 'react-router-dom'

const UnauthenticatedRouter = () => {
  return <Route exact path='/'></Route>
}

export default UnauthenticatedRouter

/*const App = ({ children }) => (
    <>
    <Navbar />
    <Dashbaord />
    {children}
  </>
)

const AuthenticatedRouter = () => ( 
  <App>
    <Switch>
    // routes
    </Switch>
  <App/>
)*/

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthenticatedRouter from './AuthenticatedRouter'
import UnauthenticatedRouter from './UnauthenticatedRouter'

const Router = () => {
  const isAuthenticated = true

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </BrowserRouter>
  )
}

export default Router

import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import {
  Button,
  Container,
  LoginContainer,
  TitleContainer
} from '../../components/styled'
import '../../App.css'

const Auth = props => {
  const [loggingIn, setLoggingIn] = useState(false)
  console.log(props)
  const toggleLoggingIn = () => {
    setLoggingIn(!loggingIn)
  }
  return (
    <div>
      <Container>
        <TitleContainer>
          <h1>iPlants.com</h1>
          <h2>A Place For Plant Enthusiasts</h2>
        </TitleContainer>
        <LoginContainer>
          {loggingIn ? (
            <Login updateToken={props.updateToken} />
          ) : (
            <Register updateToken={props.updateToken} />
          )}

          {loggingIn ? (
            <p>
              Don't have an account?
              <Button main onClick={toggleLoggingIn}>
                Register
              </Button>
            </p>
          ) : (
            <p>
              Have an account?
              <Button onClick={toggleLoggingIn}>Login</Button>
            </p>
          )}
        </LoginContainer>
      </Container>
    </div>
  )
}

export default Auth

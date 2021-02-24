import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import {
  Button,
  Wrapper,
  Row,
  Col,
  LoginCol,
  TitleCol
} from '../../components/styled'
import { colors, fontSizes } from '../styled/Theme'
import '../../App.css'

const Auth = props => {
  const [loggingIn, setLoggingIn] = useState(false)

  const toggleLoggingIn = () => {
    setLoggingIn(!loggingIn)
  }
  return (
    <div>
      <Row>
        <TitleCol>
          <h1>iPlants.com</h1>
        </TitleCol>
        <LoginCol>
          {loggingIn ? (
            <Login updateToken={props.updateToken} />
          ) : (
            <Register updateToken={props.updateToken} />
          )}

          {loggingIn ? (
            <p>
              Don't have an account? &nbsp;
              <Button main onClick={toggleLoggingIn}>
                Register
              </Button>
            </p>
          ) : (
            <p>
              Have an account? <Button onClick={toggleLoggingIn}>Login</Button>
            </p>
          )}
        </LoginCol>
      </Row>
    </div>
  )
}

export default Auth

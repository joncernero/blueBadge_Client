import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from '../../components/styled'
import APIURL from '../../helpers/environment'
import Dashboard from '../Dashboard'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(props)
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${APIURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        user: { email: email, password: password }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Logged In!!!', data)
        props.updateToken(data.sessionToken, data.user.firstName)
        setPassword('')
        // console.log(data.user.firstName)
      })
  }
  return (
    <div>
      <h1>Welcome Back!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            onChange={e => setEmail(e.target.value)}
            name='email'
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            onChange={e => setPassword(e.target.value)}
            name='password'
            value={password}
            type='password'
          />
        </FormGroup>
        <Button primary type='submit'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login

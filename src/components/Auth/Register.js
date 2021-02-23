import React, { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Button } from '../../components/styled'

const Register = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [zipcode, setZipcode] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/user/register', {
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
        props.updateToken(data.sessionToken)
      })
  }
  return (
    <div>
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            onChange={e => setEmail(e.target.value)}
            name='email'
            value={email}></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            onChange={e => setPassword(e.target.value)}
            name='password'
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            onChange={e => setFirstName(e.target.value)}
            name='firstName'
            value={firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='zipcode'>Zip Code</Label>
          <Input
            onChange={e => setZipcode(e.target.value)}
            name='zipcode'
            value={zipcode}
          />
        </FormGroup>
        <Button primary type='submit'>
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register

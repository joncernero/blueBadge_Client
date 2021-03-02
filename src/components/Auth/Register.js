import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from '../../components/styled';
import APIURL from "../../helpers/environment";

const Register = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [zipcode, setZipcode] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${APIURL}/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        user: { email: email, password: password, firstName: firstName, zipcode: zipcode }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(data => {

        console.log('ENTRY CREATED!!!', data)
      
        props.updateToken(data.sessionToken)
      })
      .catch ((err) => console.log(err))
  }
  return (
    <div>
      <h1>Join Now!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            onChange={e => setEmail(e.target.value)}
            name='email'
            type='email'
            placeholder='email@test.com'
            value={email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            onChange={e => setPassword(e.target.value)}
            name='password'
            type='password'
            minLength={'5'}
            placeholder='password'
            value={password}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            onChange={e => {
              setFirstName(e.target.value)
              console.log(e.target)
            }}
            name='firstName'
            value={firstName}
            minLength={'1'}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='zipcode'>Zip Code</Label>
          <Input
            onChange={e => setZipcode(e.target.value)}
            name='zipcode'
            value={zipcode}
            minLength={'5'}
            required
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

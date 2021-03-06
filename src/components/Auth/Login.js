import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from '../../components/styled';
import APIURL from '../../helpers/environment';
import Dashboard from '../Dashboard';
import { Alert } from 'reactstrap';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPassword('');
        setEmail('');
        if (!data.sessionToken) {
          setVisible(true);
        } else {
          props.updateToken(data.sessionToken, data.user.firstName);
        }
      });
  };

  return (
    <div>
      <Alert color='danger' isOpen={visible} toggle={onDismiss}>
        Login Failed! Click the X to close this message and try again.
      </Alert>
      <h1>Welcome Back!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            required
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            required
            onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Login;

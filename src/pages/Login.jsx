import React, { useState } from 'react';

import { useAuthentication } from '@providers/Authentication';
import Input from '@components/Input';
import Button from '@components/Button';

import '@style/login.css';

function Login() {
  var [username, setUsername] = useState('Wizeline');
  var [password, setPassword] = useState('Rocks!');
  var { login } = useAuthentication();

  var handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form
      data-testid='login'
      className='login'
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>
      <Input
        label='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='password'
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='login_buttons'>
        <Button text='Submit' type='submit' />
      </div>
    </form>
  );
}

export default Login;
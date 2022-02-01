import React, { useState } from 'react';
import { object, string } from 'yup';

import '@style/login.css';
import { useAuthentication } from '@providers/Authentication';
import Input from '@components/Input';
import Button from '@components/Button';

function Logo({ className }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180.64 121.92' className={className}>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <path d='M119,0H102.26a16.79,16.79,0,0,0-15,9.29L68.17,47.43a3.78,3.78,0,0,1-6.76,0L46,16.66a5.62,5.62,0,0,0-5-3.11H4.79A4.78,4.78,0,0,0,.51,20.46L46.7,112.83a16.43,16.43,0,0,0,29.4,0l49.65-99.28,3-6.09A13.5,13.5,0,0,1,140.86,0Z'/>
          <path d='M170.78,0H144.39a13.48,13.48,0,0,0-12.06,7.46l-3.05,6.09-.6,1.2a4.15,4.15,0,0,1,.81,4.85L91.88,94.83l8.87,17.74a16.73,16.73,0,0,0,13,9.25,16.44,16.44,0,0,0,16.49-9l49.29-98.59A9.83,9.83,0,0,0,170.78,0Z'/>
          <path d='M139.57,117.06h-1v-.37h2.51v.37h-1v3h-.44Z'/>
          <path d='M144.29,118.59c0-.47-.06-1,0-1.46h0c-.12.4-.26.82-.43,1.29l-.6,1.64h-.33l-.55-1.61q-.24-.72-.39-1.32h0c0,.42,0,1-.06,1.5l-.09,1.45h-.42l.23-3.39h.56l.58,1.64c.14.42.26.79.34,1.14h0a9.65,9.65,0,0,1,.36-1.14l.6-1.64h.56l.21,3.39h-.43Z'/>
          </g>
        </g>
      </svg>
  );
};

const loginSchema = object({
  username: string().required().test(
    'username',
    () => 'Username or password is not valid',
    (value) => value.toLowerCase() === 'wizeline',
  ),
  password: string().required().test(
    'username',
    () => 'Username or password is not valid',
    (value) => value === 'Rocks!',
  )
});

function Login() {
  var [error, setError] = useState('');
  var [username, setUsername] = useState('Wizeline');
  var [password, setPassword] = useState('Rocks!');
  var { login } = useAuthentication();

  var handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loginData = await loginSchema.validate({username, password});
      login(loginData.username, loginData.password);  
    } catch (err) {
      console.log('ERROR', err.errors)
      setError(err.message);
    }
  };

  return (
    <form
      data-testid='login'
      className='login'
      onSubmit={handleSubmit}
    >
      <Logo className='login__logo'/>
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
      <h4 className='login_error'>{error}</h4>
    </form>
  );
}

export default Login;
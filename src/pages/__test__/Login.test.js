import { render, fireEvent } from '@testing-library/react';

import AuthenticationProvider from '@providers/Authentication';
import Login from '@pages/Login';

describe('Login', function () {
  it('should render', () => {
    let { getByTestId } = render(
      <AuthenticationProvider value={{ authenticated: false }}>
        <Login />
      </AuthenticationProvider>
    );
    expect(getByTestId('login')).toBeInTheDocument();
  });

  it('should submit username and password when submit button is clicked', (done) => {
    const callback = (username, password) => {
      expect(username).toEqual('Wizeline');
      expect(password).toEqual('Rocks!');
      done();
    }

    let { getByLabelText, getByText } = render(
      <AuthenticationProvider value={{
        authenticated: false,
        login: callback
      }}>
        <Login />
      </AuthenticationProvider>
    );

    fireEvent.change(getByLabelText(/username/i), {
      target: { value: 'Wizeline' },
    });
    fireEvent.change(getByLabelText(/password/i), {
      target: { value: 'Rocks!' },
    });
    fireEvent.click(getByText(/submit/i))
  });
})
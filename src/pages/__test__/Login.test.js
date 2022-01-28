import { render } from 'react-dom';

import AuthenticationProvider from '@providers/Authentication';
import Login from '@pages/Login';

describe('Login', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <AuthenticationProvider>
        <Login />
      </AuthenticationProvider>
    );
    expect(getByTestId('login')).toBeInTheDocument();
  });

  it('should submit username and password when submit button is clicked', () => {
    var mockedLogin = jest.fn();
    var { getByTestId } = render(
      <AuthenticationProvider value={{
        user: null,
        login: mockedLogin
      }}>
        <Login />
      </AuthenticationProvider>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'Wizeline' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'Rocks!' },
    });

    expect(mockedLogin).toHaveBeenCalledTimes(1);
  });
})
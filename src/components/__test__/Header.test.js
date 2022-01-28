import { findByAltText, getByAltText, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Header from '@components/Header';
import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';

const mockedAuthenticationValue = {
  user: { username: "username-test"},
  login: () => true,
  logout: () => true
};

describe('Header', function () {
  it('should render', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('Should show home page when logged in', async () => {
    window.history.pushState({}, 'Test', '*');
    render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Header />
        <Routes />
      </GlobalProvider>
    );

    userEvent.click(getByText(/notes/i));
    expect(await findByTestId('home-page')).toBeInTheDocument();
  });

  it('Should show home page when logged in', async () => {
    window.history.pushState({}, 'Test', '*');
    render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Header />
        <Routes />
      </GlobalProvider>
    );

    userEvent.click(getByText(/archived/i));
    expect(await findByTestId('archived-notes')).toBeInTheDocument();
  });
})
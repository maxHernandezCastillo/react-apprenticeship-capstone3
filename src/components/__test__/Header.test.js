import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {  MemoryRouter } from 'react-router-dom';

import Header from '@components/Header';
import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';

describe('Header', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Header />
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('Should show home page when clicking notes manu if logged in', () => {
    var { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );

    userEvent.click(getByText(/notes/i));
    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('Should show home page when logged in', () => {
    window.history.pushState({}, 'Test', '*');
    var { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );

    userEvent.click(getByText(/archived/i));
    expect(getByTestId('archived-notes')).toBeInTheDocument();
  });
})
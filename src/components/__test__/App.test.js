import { render } from "@testing-library/react";
import {  MemoryRouter } from 'react-router-dom';

import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';

describe('App component', function () {
  it('Should show home page when logged in', () => {
    var { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('Should redirect to login page when not logged in', () => {
    var { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: false }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('login')).toBeInTheDocument();
  });

  it('Should show not found page when invalid route accesed', () => {
    var { getByTestId } = render(
      <MemoryRouter initialEntries={["/some-random-page-298761982769381"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('not-found')).toBeInTheDocument();
  });

  it('Should show archived notes page when accesed', () => {
    var { getByTestId } = render(
      <MemoryRouter initialEntries={["/archived"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Routes />
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('archived-notes')).toBeInTheDocument();
  });
})
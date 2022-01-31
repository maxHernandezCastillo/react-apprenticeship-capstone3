import { render } from "@testing-library/react";

import App from '@components/App';
import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';
import Layout from '@components/Layout';

const mockedAuthenticationValue = {
  authenticated: true,
  login: () => true,
  logout: () => true
};

describe('App component', function () {
  it('Should show home page when logged in', async () => {
    var { findByTestId } = render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Layout>
          <Routes />
        </Layout>
      </GlobalProvider>
    );
    expect(findByTestId('home-page')).toBeInTheDocument();
  });

  it('Should redirect to login page when not logged in', async () => {
    var { findByTestId } = render(<App />);
    expect(findByTestId('login-page')).toBeInTheDocument();
  });

  it('Should show not found page when invalid route accesed', async () => {
    window.history.pushState({}, 'Test', 'some-random-page-298761982769381');
    var { findByTestId } = render(<App />);
    expect(findByTestId('not-found-page')).toBeInTheDocument();
  });

  it('Should show archived notes page when accesed', async () => {
    window.history.pushState({}, 'Test', '/archived');
    var { findByTestId } = render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Layout>
          <Routes />
        </Layout>
      </GlobalProvider>
    );
    expect(findByTestId('archived-notes-page')).toBeInTheDocument();
  });
})
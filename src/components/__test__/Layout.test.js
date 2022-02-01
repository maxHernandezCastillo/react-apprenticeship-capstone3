import { render } from "@testing-library/react";
import {  MemoryRouter } from 'react-router-dom';

import GlobalProvider from '@providers/Global';
import Layout from '@components/Layout';

describe('Layout', function () {
  it('should render', () => {
    let { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <GlobalProvider authenticationValue={{ authenticated: true }}>
          <Layout>
            <p>test</p>
          </Layout>
        </GlobalProvider>
      </MemoryRouter>
    );
    expect(getByTestId('layout')).toBeInTheDocument();
  });
})
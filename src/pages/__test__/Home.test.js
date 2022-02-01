import { render, fireEvent } from '@testing-library/react';

import GlobalProvider from '@providers/Global';
import Home from '@pages/Home';

describe('Home', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <GlobalProvider 
        authenticationValue={{ authenticated: true }}
      >
        <Home />
      </GlobalProvider>
    );
    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('should filter notes when searching', (done) => {
    const callback = (searchTerm) => {
      expect(searchTerm).toEqual('test');
      done();
    };
    let { getByRole } = render(
      <GlobalProvider 
        authenticationValue={{ authenticated: true }}
        globalcontextValue={{ setSearchTerm: callback }}
      >
        <Home />
      </GlobalProvider>
    );

    fireEvent.change(getByRole('textbox', { name: /.*search.*/i }), {
      target: { value: 'test' },
    });
  });
})
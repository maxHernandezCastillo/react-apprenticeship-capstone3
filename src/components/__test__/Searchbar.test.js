import { render, fireEvent } from '@testing-library/react';

import GlobalProvider from '@providers/Global';
import Searchbar from '@components/Searchbar';

describe('Searchbar', function () {
  it('should render', () => {
    let { getByTestId } = render(
      <GlobalProvider>
        <Searchbar />
      </GlobalProvider>
    );
    expect(getByTestId('searchbar')).toBeInTheDocument();
  });

  it('should set searchFilter variable when typing in the input', (done) => {
    const callback = (searchTerm) => {
      expect(searchTerm).toEqual('test');
      done();
    };
    let { getByRole } = render(
      <GlobalProvider globalcontextValue={{
        setSearchTerm: callback
      }}>
        <Searchbar />
      </GlobalProvider>
    );

    fireEvent.change(getByRole('textbox', { name: /searchbar/i }), {
      target: { value: 'test' },
    });
  });
})
import { render, screen, fireEvent } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import GlobalProvider, { useGlobal } from '@providers/Global';
import Searchbar from '@components/Searchbar';

describe('Searchbar', function () {
  beforeEach(() => {
    render(
      <GlobalProvider>
        <Searchbar />
      </GlobalProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  it('should set searchFilter variable when typing in the input', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useGlobal(),
        { wrapper: useGlobal }
      );

      fireEvent.change(screen.getByRole('textbox', { name: /.*search.*/i }), {
        target: { value: 'test' },
      });
  
      waitForValueToChange(() => result.current.searchTerm);
      expect(result.current.searchTerm).toHaveValue('test');
    });
  });
})
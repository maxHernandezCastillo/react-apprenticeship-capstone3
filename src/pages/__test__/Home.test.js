import { render } from 'react-dom';

import GlobalProvider from '@providers/Global';
import NotesProvider, { useNotes } from '@providers/Notes';
import Home from '@pages/Home';

const mockedAuthenticationValue = {
  authenticated: true,
  login: () => true,
  logout: () => true
};

describe('Home', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <GlobalProvider 
        notesValue={{
          notes: [
            {
              id: '0',
              text: 'test-text',
              color: 'color-identifier',
              archived: true
            },
            {
              id: '1',
              text: 'not-related',
              color: 'no-related',
              archived: true
            }
          ]
        }} 
        authenticationValue={mockedAuthenticationValue}
      >
        <Home />
      </GlobalProvider>
    );
    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('should filter notes when searching', () => {
    var { getByTestId } = render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Home />
      </GlobalProvider>
    );

    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('should filter notes when searching', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useNotes(),
        { wrapper: NotesProvider }
      );

      fireEvent.change(screen.getByRole('textbox', { name: /.*search.*/i }), {
        target: { value: 'test' },
      });
  
      waitForValueToChange(() => result.current.notes);
      expect(result.current.notes).toHaveLength(1);
    });
  });
})
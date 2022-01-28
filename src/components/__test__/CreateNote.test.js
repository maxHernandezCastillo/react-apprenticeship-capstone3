
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, renderHook } from '@testing-library/react-hooks';

import NotesContextProvider, { useNotes } from '@providers/Notes';
import CreateNote from '@components/CreateNote';

describe('CreateNote', function () {
  beforeEach(() => {
    render(
      <NotesContextProvider>
        <CreateNote  />
      </NotesContextProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('create-note')).toBeInTheDocument();
  });

  it('should accept text', () => {
    userEvent.type(screen.getByRole('textbox'), 'testing-typing');
    expect(screen.getByRole('textbox')).toHaveValue('testing-typing')
  });

  it('should add note when clicked add button', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useNotes(),
        { wrapper: NotesContextProvider }
      );

      userEvent.type(screen.getByRole('textbox'), 'testing-typing');
      userEvent.click(screen.getByAltText(/.*color.*/i));
      userEvent.click(screen.getByAltText(/.*red.*/i));
      userEvent.click(screen.getByAltText(/.*add.*/i));
  
      waitForValueToChange(() => result.current.notes);
      expect(result.current.notes).toHaveLength(1);
    });
  });
})
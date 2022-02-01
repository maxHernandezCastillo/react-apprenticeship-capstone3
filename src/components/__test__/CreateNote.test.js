
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NotesContextProvider, { useNotes } from '@providers/Notes';
import CreateNote from '@components/CreateNote';

describe('CreateNote', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <NotesContextProvider>
        <CreateNote  />
      </NotesContextProvider>
    );
    expect(getByTestId('create-note')).toBeInTheDocument();
  });

  it('should accept text', () => {
    var { getByRole } = render(
      <NotesContextProvider>
        <CreateNote  />
      </NotesContextProvider>
    );
    userEvent.type(screen.getByRole('textbox'), 'testing-typing');
    expect(getByRole('textbox')).toHaveValue('testing-typing')
  });

  it('should add note when clicked add button', async () => {
    var callback = (note) => {
      expect(note.text).toEqual('testing-typing');
      expect(note.color).toEqual('red');
      done();
    };

    render(
      <NotesContextProvider value={{ 
        updateNote: callback, 
      }}>
        <CreateNote/>
      </NotesContextProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /red/i }));
    userEvent.type(screen.getByRole('textbox'), 'testing-typing');
    userEvent.click(screen.getByRole('button', { name: /add/i }));
  });
})
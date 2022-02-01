
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockedNotes from '@assets/mocks/notes.json';
import Note from '@components/Note';
import NotesContextProvider, { useNotes } from '@providers/Notes';

describe('Note', function () {
  it('should render', () => {
    render(
      <NotesContextProvider>
        <Note />
      </NotesContextProvider>
    );
    expect(screen.getByTestId('note')).toBeInTheDocument();
  });

  it('should show text', () => {
    render(
      <NotesContextProvider>
        <Note note={{text: 'test-text'}} />
      </NotesContextProvider>
    );
    expect(screen.getByText('test-text')).toBeInTheDocument();
  });

  it('should change when clicked a new color', (done) => {
    var callback = (note) => {
      expect(note.color).toEqual('red');
      done();
    };
    render(
      <NotesContextProvider value={{ 
        notes: [mockedNotes[0]],
        updateNote: callback, 
      }}>
        <Note note={mockedNotes[0]} />
      </NotesContextProvider>
    );
    userEvent.click(screen.getByRole('button', { name: /red/i }));
  });

  it('should add to non archived notes when click on restore button', (done) => {
    var mockedNote = Object.assign(mockedNotes[0], { archived: true });
    var callback = (note) => {
      expect(note.archived).toEqual(false);
      done();
    };
    render(
      <NotesContextProvider value={{ 
        notes: [mockedNote],
        updateNote: callback, 
      }}>
        <Note note={mockedNote} />
      </NotesContextProvider>
    );
    userEvent.click(screen.getByRole('button', { name: /restore/i }));
  });
})
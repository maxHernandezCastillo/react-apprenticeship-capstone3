
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, renderHook } from '@testing-library/react-hooks';

import Note from '@components/Note';
import NotesContextProvider, { useNotes } from '@providers/Notes';

describe('Note', function () {
  beforeEach(() => {
    render(
      <NotesContextProvider value={{
        notes: [{
          id: '0',
          text: 'test-text',
          color: 'color-identifier',
          archived: true
        }]
      }}>
        <Note note={{
          id: '0',
          text: 'test-text',
          color: 'color-identifier',
          archived: true
        }} />
      </NotesContextProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('note')).toBeInTheDocument();
  });

  it('should show text', () => {
    expect(screen.getByText('test-text')).toBeInTheDocument();
  });

  it('should change when clicked a new color', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useNotes(),
        { wrapper: NotesContextProvider }
      );

      userEvent.click(await screen.findByAltText(/.*color.*/i));
      userEvent.click(await screen.findByAltText(/.*red.*/i));
  
      waitForValueToChange(() => result.current.notes);
      expect(result.current.notes[0].color).toHaveValue(/.*red.*/i);
    });
  });

  it('should add to non archived notes when click on restore button', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useNotes(),
        { wrapper: NotesContextProvider }
      );

      userEvent.click(await screen.findByAltText(/.*restore.*/i));
  
      waitForValueToChange(() => result.current.notes);
     expect(result.current.notes[0].archived).toHaveValue(false);
    });
  });
})
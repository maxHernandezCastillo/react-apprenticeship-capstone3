import { render, screen, fireEvent } from '@testing-library/react';

import IconButton from '@components/IconButton';

describe('IconButton', () => {
  it('should render', () => {
    render(<IconButton />);
    expect(screen.getByTestId('icon-button')).toBeInTheDocument();
  });

  it('should call onClick event', () => {
    var mockedOnClick = jest.fn();
    render(<IconButton onClick={mockedOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
})
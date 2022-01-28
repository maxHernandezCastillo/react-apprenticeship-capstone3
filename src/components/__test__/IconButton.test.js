import { render, screen, fireEvent } from '@testing-library/react';

import IconButton from '@components/IconButton';

const mockedOnClick = jest.fn();

describe('IconButton', function () {
  beforeEach(() => {
    render(<IconButton onClick={mockedOnClick} />)
  });

  it('should render', () => {
    expect(screen.getByTestId('icon-button')).toBeInTheDocument();
  });

  it('should call onClick event', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockedOnClick).toBeCalled();
  });
})
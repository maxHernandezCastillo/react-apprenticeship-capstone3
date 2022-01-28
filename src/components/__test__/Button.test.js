import { render, screen, fireEvent } from '@testing-library/react';

import Button from '@components/Button';

const mockedOnClick = jest.fn();

describe('Button', function () {
  beforeEach(() => {
    render(<Button text='test' onClick={mockedOnClick} />)
  });

  it('should render', () => {
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('should set text', () => {
    expect(screen.getByRole('button', {name: 'test'})).toBeInTheDocument();
  });

  it('should call onClick event', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockedOnClick).toBeCalled();
  });
})
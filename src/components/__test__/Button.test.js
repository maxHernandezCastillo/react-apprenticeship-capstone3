import { render, fireEvent } from '@testing-library/react';

import Button from '@components/Button';

describe('Button', () => {
  it('should render', () => {
    let { getByTestId } = render(<Button text='test' />);
    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('should set text', () => {
    let { getByRole } = render(<Button text='test' />);
    expect(getByRole('button', {name: 'test'})).toBeInTheDocument();
  });

  it('should call onClick event', () => {
    let mockedOnClick = jest.fn();
    let { getByRole } = render(<Button text='test' onClick={mockedOnClick} />);
    fireEvent.click(getByRole('button'));
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
})
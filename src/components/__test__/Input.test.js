
import { render, screen, fireEvent } from '@testing-library/react';

import Input from '@components/Input';

const mockedOnChange = jest.fn();

describe('Input', function () {
  beforeEach(() => {
    render(
      <Input
        label='Input label'
        value='text-value'
        onChange={mockedOnChange}
      />
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should render its label text element', () => {
    expect(screen.getByText('input-label')).toBeInTheDocument();
  });

  it('should set a value', () => {
    expect(screen.getByRole('textbox')).toHaveValue('text-value');
  });

  it('should call onChange when typing in the input', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'modified-text-value' },
    });
    expect(mockedOnChange).toBeCalled();
  });
})
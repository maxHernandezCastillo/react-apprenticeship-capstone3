import { render } from '@testing-library/react';

import NotFound from '@pages/NotFound';

describe('NotFound', function () {
  it('should render', () => {
    var { getByTestId } = render(<NotFound /> );
    expect(getByTestId('not-found')).toBeInTheDocument();
  });
})
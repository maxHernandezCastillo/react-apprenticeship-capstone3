
import { render } from '@testing-library/react';

import GlobalProvider from '@providers/Global';
import Archived from '@pages/Archived';

describe('Archived', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <GlobalProvider authenticationValue={{ authenticated: true }}>
        <Archived />
      </GlobalProvider>
    );
    expect(getByTestId('archived-notes')).toBeInTheDocument();
  });
})
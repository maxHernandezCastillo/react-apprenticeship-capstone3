
import { render } from 'react-dom';

import GlobalProvider from '@providers/Global';
import Archived from '@pages/Archived';

const mockedAuthenticationValue = {
  authenticated: true,
  login: () => true,
  logout: () => true
};

describe('Archived', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <GlobalProvider authenticationValue={mockedAuthenticationValue}>
        <Archived />
      </GlobalProvider>
    );
    expect(getByTestId('archived-notes')).toBeInTheDocument();
  });
})
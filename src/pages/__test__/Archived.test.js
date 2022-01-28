
import { render } from 'react-dom';

import GlobalProvider from '@providers/Global';
import Archived from '@pages/Archived';

describe('Archived', function () {
  it('should render', () => {
    var { getByTestId } = render(
      <GlobalProvider>
        <Archived />
      </GlobalProvider>
    );
    expect(getByTestId('archived-notes')).toBeInTheDocument();
  });
})
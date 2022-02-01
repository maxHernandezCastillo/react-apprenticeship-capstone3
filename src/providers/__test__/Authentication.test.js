import { act, renderHook } from '@testing-library/react-hooks';

import { AuthStorage } from '@utils/storages';
import Authentication, { useAuthentication } from '@providers/Authentication'

describe('Authentication provider', function () {

  it('should login when login function is correctly called', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useAuthentication(),
        { wrapper: Authentication }
      );

      result.current.login('Wizeline', 'Rocks!')
      await waitForValueToChange(() => result.current.authenticated);
      expect(result.current.authenticated).toEqual(true);
    });
  });

  it('should logout when logout function is correctly called', async () => {
    AuthStorage.set({ authenticated: false });

    await act(async () => {
      const { result, waitFor } = renderHook(
        () => useAuthentication(),
        { wrapper: Authentication }
      );
      result.current.login('Wizeline', 'Rocks!')
      await waitFor(() => result.current.authenticated);
      expect(result.current.authenticated).toEqual(true);
      result.current.logout();
      await waitFor(() => !result.current.authenticated);
      expect(result.current.authenticated).toEqual(false);
    });
  });
})
import { act, renderHook } from '@testing-library/react-hooks';

import Authentication, { useAuthentication } from '@providers/Authentication'

describe('Authentication provider', function () {

  it('should login when login function is correctly called', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useAuthentication(),
        { wrapper: Authentication }
      );

      result.login('Wizeline', 'Rocks!')
      waitForValueToChange(() => result.current.user);
      expect(result.current.user.username).toHaveValue(/Wizeline/i);
    });
  });

  it('should logout when logout function is correctly called', async () => {
    await act(async () => {
      const { result, waitForValueToChange } = renderHook(
        () => useAuthentication(),
        { wrapper: Authentication }
      );
      result.login('Wizeline', 'Rocks!')
      waitForValueToChange(() => result.current.user);
      result.logout();
      waitForValueToChange(() => result.current.user);
      expect(result.current.user).toHaveValue(null);
    });
  });
})
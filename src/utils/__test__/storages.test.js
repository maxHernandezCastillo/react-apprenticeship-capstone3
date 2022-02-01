
import { AuthStorage } from '@utils/storages';

describe('AuthStorage', function () {
  it('should be able to set and retrieve a complex value', () => {
    AuthStorage.set('test')
    var value = AuthStorage.get();
    expect(value).toEqual('test');
  });
})
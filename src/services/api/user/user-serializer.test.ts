import { deserializeUser, deserializeUserRepo } from './user-serializer';
import { rawUser } from '../../../../test/fixtures/user';
import { rawUserRepo } from '../../../../test/fixtures/user-repo';

describe('Services | Api | User | deserializers', () => {
  it('deserializeUser result should match snapshot', () => {
    expect(deserializeUser(rawUser)).toMatchSnapshot();
  });

  it('deserializeUserRepo result should match snapshot', () => {
    expect(deserializeUserRepo(rawUserRepo)).toMatchSnapshot();
  });
});


import Layout from '@components/Layout';

describe('Layout', function () {
  it('should render', () => {
    render(<Layout />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
})
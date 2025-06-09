import { render, screen } from '@/utils/test-utils';
import { Layout } from '../index';

describe('Layout', () => {
  it('should render', () => {
    render(<Layout>Elemento filho</Layout>);

    const main = screen.getByRole('main');

    expect(main).toMatchSnapshot();
  });
});

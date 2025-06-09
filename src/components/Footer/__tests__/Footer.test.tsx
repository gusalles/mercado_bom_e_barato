import { render, screen } from '@/utils/test-utils';

import { Footer } from '../Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toMatchSnapshot();
  });
});

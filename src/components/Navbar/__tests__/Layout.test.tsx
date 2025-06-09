import { render, screen, userEvent } from '@/utils/test-utils';
import { Navbar } from '../Navbar';

import routerMock from 'next-router-mock';

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);

    const navigation = screen.getByRole('navigation');

    expect(navigation).toMatchSnapshot();
  });

  it('should redirect to home when click in Home anchor', () => {
    render(<Navbar />);

    const link = screen.getByRole('link');

    userEvent.click(link);

    expect(routerMock.asPath).toEqual('/');
  });
});

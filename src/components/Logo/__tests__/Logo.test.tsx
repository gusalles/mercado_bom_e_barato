import { render, screen } from '@/utils/test-utils';
import { Logo } from '../Logo';

describe('Logo', () => {
  it('should render with default dimensions', () => {
    render(<Logo />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toMatchSnapshot();
  });

  it('should render with custom dimensions', () => {
    render(<Logo width={200} height={60} />);

    const logo: { width: number } & HTMLElement = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo.width).toEqual(200);
  });
});

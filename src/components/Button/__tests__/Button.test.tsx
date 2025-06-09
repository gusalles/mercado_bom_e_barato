import { render, screen } from '@/utils/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });
});

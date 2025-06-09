import { render, screen, userEvent } from '@/utils/test-utils';
import { BackButton } from '../BackButton';

describe('BackButton', () => {
  const mockClickTrigger = vi.fn();

  it('should render', () => {
    render(<BackButton onClick={mockClickTrigger} />);

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });

  it('should trigger the click effect', async () => {
    render(<BackButton onClick={mockClickTrigger} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(mockClickTrigger).toBeCalled();
  });
});

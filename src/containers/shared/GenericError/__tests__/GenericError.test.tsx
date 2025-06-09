import { renderWithClient, screen } from '@/utils/test-utils';
import { GenericError } from '../GenericError';

describe('GenericErrorPage', () => {
  it('should show error message', () => {
    const errorMessageExpected = 'Ocorreu um erro';

    renderWithClient(<GenericError message={errorMessageExpected} />);

    const title = screen.getByRole('heading', {
      name: errorMessageExpected,
    });

    expect(title).toBeInTheDocument();
  });
});

import { renderWithClient, screen } from '@/utils/test-utils';
import { NotFoundContainer } from '../NotFound';

describe('NotFoundPage', () => {
  it('should show not fount message', () => {
    renderWithClient(<NotFoundContainer />);

    const title = screen.getByRole('heading', {
      name: /Pagina não encontrada./i,
    });

    expect(title).toBeInTheDocument();
  });
});

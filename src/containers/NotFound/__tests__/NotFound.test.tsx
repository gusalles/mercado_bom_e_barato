import { renderWithClient, screen } from '@/utils/test-utils';
import { NotFoundContainer } from '../NotFound';

describe('NotFoundPage', () => {
  it('should render products list', () => {
    renderWithClient(<NotFoundContainer />);

    const title = screen.getByRole('heading', {
      name: /Pagina não encontrada./i,
    });

    expect(title).toBeInTheDocument();
  });
});

import { ErrorContainer } from '@/containers/shared';

export function HomeError() {
  return (
    <ErrorContainer>
      <h1>Não foi possível carregar os produtos.</h1>
    </ErrorContainer>
  );
}

import { ErrorContainer } from './GenericError.styles';

interface GenericErrorProps {
  message: string;
}

export function GenericError({ message }: GenericErrorProps) {
  return (
    <ErrorContainer>
      <h1>{message}</h1>
    </ErrorContainer>
  );
}

import { ButtonProps } from '@mui/material';
import { StyledButton } from './Button.styles';

export function Button(props: ButtonProps) {
  return <StyledButton variant="outlined" {...props} />;
}

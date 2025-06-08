import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from './BackButton.styles';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button type="button" onClick={onClick}>
      <ArrowBackIcon color="secondary" />
    </Button>
  );
}

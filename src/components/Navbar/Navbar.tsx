import { Container } from '@mui/material';
import { Logo } from '../Logo';

export function Navbar() {
  return (
    <Container
      component="nav"
      sx={{
        borderRadius: '32px',
        bgcolor: { _: 'transparent', md: 'background.paper' },
        paddingY: { xs: '8px', sm: '8px', md: '16px' },
        marginTop: { _: '0', md: '40px' },
      }}
    >
      <Logo />
    </Container>
  );
}

import { Box } from '@mui/material';
import Image from 'next/image';
import { Logo } from '../Logo';

export function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        borderRadius: '32px',
        bgcolor: { sm: 'transparent', md: 'background.paper' },
        paddingY: { sm: '8px', md: '16px' },
        paddingX: { sm: '8px', md: '36px' },
        marginTop: { sm: '0', md: '40px' },
        marginX: { sm: '0', md: '96px' },
      }}
    >
      <Logo />
    </Box>
  );
}

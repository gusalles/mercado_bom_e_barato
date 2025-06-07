import { Box, Divider } from '@mui/material';
import { FooterContact } from './FooterContact';
import { Logo } from '../Logo';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        paddingY: '3.75rem',
        paddingX: '6rem',
        bgcolor: 'primary.main',
        display: { sm: 'none', md: 'block' },
      }}
    >
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo />
        <FooterContact />
      </Box>

      <Divider sx={{ marginTop: '32px', marginBottom: '16px' }} />

      <Box
        component="section"
        sx={{ color: 'black', fontSize: '0.75rem', lineHeight: '160%' }}
      >
        Ice Dreams ©️ 2024 • Política de Privacidade • Termos de Uso
      </Box>
    </Box>
  );
}

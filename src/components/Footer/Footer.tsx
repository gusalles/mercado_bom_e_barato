import { Box } from '@mui/material';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f8f8f8',
      }}
    >
      Ice Dreams ©️ 2024 • Política de Privacidade • Termos de Uso
    </Box>
  );
}

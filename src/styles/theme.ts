import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9E3D',
    },
    background: {
      default: '#F2F2F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#262626',
      secondary: '#4A4A4A',
    },
    divider: '#000000',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#262626',
          backgroundColor: '#F2F2F2',
          fontFamily: inter.style.fontFamily,
        },
      },
    },
  },
});

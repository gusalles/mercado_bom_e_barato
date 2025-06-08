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
    secondary: {
      main: '#4A4A4A',
    },
    background: {
      default: '#F2F2F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#262626',
      secondary: '#4A4A4A',
    },
    grey: {
      '200': '#E6E6E6',
    },
    divider: '#000000',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
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

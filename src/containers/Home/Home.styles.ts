import { styled } from '@mui/material';

export const HomeTitle = styled('h1')(({ theme }) => ({
  fontSize: '2rem',
  lineHeight: '130%',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '24px',
  },
}));

export const HomeSection = styled('section')(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '16px 22px',
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'transparent',
    padding: 0,
  },
}));

export const PaginationContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
}));

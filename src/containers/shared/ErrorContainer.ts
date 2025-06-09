import { Container, styled } from '@mui/material';

export const ErrorContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '16px 22px',
  height: '50dvh',
  [theme.breakpoints.down('md')]: {
    margin: '0 16px 16px 16px',
    width: 'auto',
  },
}));

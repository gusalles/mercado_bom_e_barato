import { styled } from '@mui/material';

export const Main = styled('main')(({ theme }) => ({
  margin: '64px 96px 80px 96px',
  [theme.breakpoints.down('md')]: {
    margin: '0 4px',
  },
}));

import { styled } from '@mui/material';

export const ProductListContainer = styled('ul')(({ theme }) => ({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

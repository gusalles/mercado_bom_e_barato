import { styled } from '@mui/material';

export const ProductDetailsTitle = styled('h2')(() => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: '140%',
  marginBottom: '24px',
}));

export const ProductDetailsContainer = styled('ul')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
}));

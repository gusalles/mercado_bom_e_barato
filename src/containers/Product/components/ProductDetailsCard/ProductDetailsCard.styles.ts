import { styled } from '@mui/material';

export const StyledProductDetailsCard = styled('li')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: 16,
  padding: '16px 30.5px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export const ProductDetailsCardTitle = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: '140%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: '150%',
  },
}));

export const ProductDetailsCardDescription = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: '150%',
  [theme.breakpoints.down('sm')]: {
    lineHeight: '150%',
  },
}));

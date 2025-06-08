import { styled } from '@mui/material';

export const ProductListItemContainer = styled('li')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '400px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    height: 'auto',
  },
}));

export const ProductListItemSection = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
    width: 'calc(100% - 116px)',
  },
}));

export const ProductListItemTitle = styled('p')(() => ({
  fontSize: '1rem',
  fontWeight: 600,
  marginTop: '8px',
}));

export const ProductListItemSubTitle = styled('p')(() => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  marginTop: '4px',
  flexGrow: 1,
}));

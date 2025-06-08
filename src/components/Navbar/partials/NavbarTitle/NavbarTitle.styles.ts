import { styled } from '@mui/material';

export const Title = styled('h1')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: '140%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 200,
  },
}));

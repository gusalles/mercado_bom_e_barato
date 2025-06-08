import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterContainer = styled('footer')(({ theme }) => ({
  width: '100%',
  padding: '60px 96px',
  backgroundColor: theme.palette.primary.main,
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const FooterSection = styled('section')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const FooterDivider = styled(Divider)(() => ({
  marginTop: '32px',
  marginBottom: '16px',
}));

export const FooterUseTerm = styled('p')(() => ({
  color: 'black',
  fontSize: '0.75rem',
  lineHeight: '160%',
}));

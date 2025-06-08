import { Container, ContainerProps, styled } from '@mui/material';

export const NavBarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '32px',
    backgroundColor: theme.palette.background.paper,
    padding: '16px 0',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      padding: '18px 0',
      margin: '0 16px',
      backgroundColor: theme.palette.background.default,
    },
  })
);

export const NavBarSection = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    gap: '1.125rem',
  },
}));

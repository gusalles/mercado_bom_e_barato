import { Container, ContainerProps, styled } from '@mui/material';

export const NavBarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    borderRadius: '32px',
    backgroundColor: theme.palette.background.paper,
    padding: '16px 0',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      padding: '8px 0',
      margin: '0 16px',
      backgroundColor: theme.palette.background.default,
    },
  })
);

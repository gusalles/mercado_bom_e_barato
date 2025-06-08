import { Container, ContainerProps, styled } from '@mui/material';

export const ImageContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    marginBottom: '40px',
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  })
);

export const DataContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '48px',
  [theme.breakpoints.down('md')]: {
    padding: '24px 16px',
    margin: '0 16px 28px 16px',
    width: 'auto',
  },
}));

export const ProductTitle = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  lineHeight: '120%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProductDescriptionTitle = styled('h3')(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: '130%',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '140%',
  },
}));
export const ProductDescription = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '150%',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem',
  },
}));

export const ProductDetailsSection = styled('section')(({ theme }) => ({
  margin: '24px 0 64px 0',
  [theme.breakpoints.down('md')]: {
    margin: '0 0 24px 0',
  },
}));

export const ProductDescriptionSection = styled('section')(({ theme }) => ({
  marginBottom: '58px',
  [theme.breakpoints.down('md')]: {
    marginBottom: 0,
  },
}));

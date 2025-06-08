import { styled } from '@mui/material';
import Link from 'next/link';
import { NavbarLinkProps } from './NavbarLink';

export const StyledLink = styled(Link)<NavbarLinkProps>(
  ({ selected, theme }) => ({
    color: selected ? theme.palette.primary.main : theme.palette.secondary.main,
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '150%',
    textDecoration: 'none',
  })
);

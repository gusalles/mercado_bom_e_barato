import React from 'react';
import { LinkProps } from 'next/link';
import { StyledLink } from './NavbarLink.styles';

export interface NavbarLinkProps extends Omit<LinkProps, 'as'> {
  selected?: boolean;
  children: React.ReactNode;
}

export function NavbarLink(props: NavbarLinkProps) {
  return <StyledLink {...props} />;
}

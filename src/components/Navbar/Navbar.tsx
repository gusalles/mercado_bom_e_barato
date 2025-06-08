import { Logo } from '../Logo';
import { NavBarContainer } from './Navbar.styles';

export function Navbar() {
  return (
    <NavBarContainer component="nav">
      <Logo />
    </NavBarContainer>
  );
}

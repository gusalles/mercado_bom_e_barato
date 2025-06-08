import { useRouter } from 'next/router';
import { Logo } from '../Logo';
import { useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BackButton, NavbarLink, NavbarTitle } from './partials';
import { NavBarContainer, NavBarSection } from './Navbar.styles';

export function Navbar() {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isProductPath = router.pathname.includes('products');

  const shouldHideLogo = isMobile && isProductPath;

  const handleBackButtonClick = () => router.back();

  return (
    <NavBarContainer component="nav">
      {shouldHideLogo ? (
        <>
          <NavBarSection>
            <BackButton onClick={handleBackButtonClick} />
            <NavbarTitle />
          </NavBarSection>
        </>
      ) : (
        <NavBarSection>
          <Logo />
        </NavBarSection>
      )}
      {!isMobile && (
        <NavBarSection>
          <NavbarLink href="/" selected={router.pathname === '/'}>
            Início
          </NavbarLink>
        </NavBarSection>
      )}
      {isMobile ? (
        <NavBarSection>
          <ShoppingCartOutlinedIcon color="secondary" />
          <MenuIcon color="secondary" />
        </NavBarSection>
      ) : (
        <NavBarSection>
          <PersonOutlineOutlinedIcon color="secondary" />
          <ShoppingCartOutlinedIcon color="secondary" />
        </NavBarSection>
      )}
    </NavBarContainer>
  );
}

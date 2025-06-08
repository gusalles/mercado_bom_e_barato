import { FooterContactContainer } from './FooterContact.styles';
import { FooterContactLogo } from '../FooterContactLogo';

export function FooterContact() {
  return (
    <FooterContactContainer>
      Acompanhe nossas redes sociais:
      <FooterContactLogo src="/youtube.svg" alt="YouTube" />
      <FooterContactLogo src="/spotify.svg" alt="Spotify" />
      <FooterContactLogo src="/facebook.svg" alt="Facebook" />
      <FooterContactLogo src="/instagram.svg" alt="Instagram" />
    </FooterContactContainer>
  );
}

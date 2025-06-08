import { Logo } from '../Logo';
import { FooterContact } from './partials';
import {
  FooterContainer,
  FooterSection,
  FooterDivider,
  FooterUseTerm,
} from './Footer.styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo />
        <FooterContact />
      </FooterSection>
      <FooterDivider />
      <FooterSection>
        <FooterUseTerm>
          Ice Dreams ©️ 2024 • Política de Privacidade • Termos de Uso
        </FooterUseTerm>
      </FooterSection>
    </FooterContainer>
  );
}

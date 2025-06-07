import { FooterContactLogo } from './FooterContactLogo';

export function FooterContact() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: 'black',
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '140%',
      }}
    >
      Acompanhe nossas redes sociais:
      <FooterContactLogo url="/youtube.svg" alt="YouTube" />
      <FooterContactLogo url="/spotify.svg" alt="Spotify" />
      <FooterContactLogo url="/facebook.svg" alt="Facebook" />
      <FooterContactLogo url="/instagram.svg" alt="Instagram" />
    </div>
  );
}

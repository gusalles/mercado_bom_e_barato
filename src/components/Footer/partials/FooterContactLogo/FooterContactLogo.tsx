import Image from 'next/image';

interface FooterContactLogoProps {
  src: string;
  alt: string;
}

export function FooterContactLogo({ src, alt }: FooterContactLogoProps) {
  return <Image src={src} alt={alt} width={24} height={24} />;
}

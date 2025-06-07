import Image from 'next/image';

interface FooterContactLogoProps {
  url: string;
  alt: string;
}

export function FooterContactLogo({ url, alt }: FooterContactLogoProps) {
  return <Image src={url} alt={alt} width={24} height={24} />;
}

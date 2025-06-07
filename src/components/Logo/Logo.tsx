import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 145, height = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo Mercado B&B"
      width={width}
      height={height}
    />
  );
}

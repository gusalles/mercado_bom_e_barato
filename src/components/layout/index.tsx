import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Main } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

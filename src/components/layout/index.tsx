import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
}

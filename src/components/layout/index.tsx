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
      <Box
        component="main"
        sx={{
          marginX: { sm: '16px', md: '96px' },
          marginTop: { sm: '16px', md: '64px' },
          marginBottom: { sm: '16px', md: '80px' },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

import { Product } from '@/services';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      key={product.id}
      component="li"
      sx={{
        border: '1px solid #E6E6E6',
        bgcolor: 'white',
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: { _: 'row', md: 'column' },
        alignItems: 'center',
        height: { _: 'auto', md: '400px' },
      }}
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={isMobile ? 100 : 200}
        height={isMobile ? 100 : 200}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: {
            xs: 'calc(100% - 116px)',
            sm: 'calc(100% - 116px)',
            md: '100%',
          },
          marginLeft: { xs: '16px', sm: '16px', md: '0' },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '8px' }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '4px', flexGrow: 1 }}>
          {product.category} {product.brand && `| ${product.brand}`}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            marginTop: '16px',
            borderRadius: '12px',
            color: '#000',
            textTransform: 'initial',
            fontWeight: 600,
            fontSize: '1rem',
            height: '56px',
          }}
          fullWidth
          onClick={() => router.push(`/products/${product.id}`)}
        >
          Ver mais
        </Button>
      </Box>
    </Box>
  );
}

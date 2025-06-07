import { Product } from '@/services';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Box
      key={product.id}
      component="li"
      sx={{
        border: '1px solid #E6E6E6',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
        loading="lazy"
      />
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '8px' }}
      >
        {product.title}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '4px' }}>
        {product.category}
      </Typography>
    </Box>
  );
}

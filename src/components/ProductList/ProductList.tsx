import { Product } from '@/services';
import { Box, Typography } from '@mui/material';
import { ProductListItem } from './ProductListItem';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: { sm: 'block', md: 'grid' },
        gap: '1rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {products.map((product: Product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Box>
  );
}

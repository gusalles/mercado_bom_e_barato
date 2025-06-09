import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMediaQuery, useTheme } from '@mui/material';
import { Product } from '@/services';
import { Button } from '@/components/Button';
import {
  ProductListItemContainer,
  ProductListItemSection,
  ProductListItemSubTitle,
  ProductListItemTitle,
} from './ProductListItem.styles';

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleProductClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <ProductListItemContainer key={product.id}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={isMobile ? 100 : 200}
        height={isMobile ? 100 : 200}
        priority
      />
      <ProductListItemSection>
        <ProductListItemTitle>{product.title}</ProductListItemTitle>
        <ProductListItemSubTitle>
          {product.category} {product.brand && `| ${product.brand}`}
        </ProductListItemSubTitle>
        <Button fullWidth onClick={handleProductClick}>
          Ver mais
        </Button>
      </ProductListItemSection>
    </ProductListItemContainer>
  );
}

import { Product } from '@/services';
import { ProductListLoading, ProductListItem } from './partials';
import { ProductListContainer } from './ProductList.styles';

interface ProductListProps {
  products?: Product[];
  isLoading?: boolean;
}

export function ProductList({ products, isLoading }: ProductListProps) {
  const list = products || Array.from<Product>({ length: 12 });
  return (
    <ProductListContainer>
      {list.map((product) => {
        if (isLoading) {
          return <ProductListLoading key={Math.random()} />;
        }
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ProductListContainer>
  );
}

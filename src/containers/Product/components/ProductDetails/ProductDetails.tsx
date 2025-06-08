import { Product } from '@/services';
import {
  ProductDetailsTitle,
  ProductDetailsContainer,
} from './ProductDetails.styles';
import { ProductDetailsCard } from '../ProductDetailsCard';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <>
      <ProductDetailsTitle>Informações</ProductDetailsTitle>
      <ProductDetailsContainer>
        <ProductDetailsCard title="Marca" description={product.brand} />
        <ProductDetailsCard title="Categoria" description={product.category} />
        <ProductDetailsCard title="Nota" description={product.rating} />
        <ProductDetailsCard title="Quantidade" description={product.stock} />
        <ProductDetailsCard title="Preço" description={`R$ ${product.price}`} />
        <ProductDetailsCard
          title="Garantia"
          description={product.warrantyInformation}
        />
      </ProductDetailsContainer>
    </>
  );
}

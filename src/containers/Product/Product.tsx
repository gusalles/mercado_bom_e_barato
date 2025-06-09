import { Product } from '@/services';
import { Carousel } from '@/components/Carousel';
import { ProductDetails, ProductLoading } from './components';
import {
  ImageContainer,
  DataContainer,
  ProductTitle,
  ProductDetailsSection,
  ProductDescriptionSection,
  ProductDescriptionTitle,
  ProductDescription,
} from './Product.types';
import { GenericError } from '../shared';

export interface ProductContainerProps {
  product?: Product;
  isLoading: boolean;
  hasError?: boolean;
}

export function ProductContainer({
  product,
  isLoading,
  hasError,
}: ProductContainerProps) {
  if (hasError)
    return (
      <GenericError message="Não foi possível carregar as informações do produto." />
    );

  if (!isLoading && product)
    return (
      <>
        <ImageContainer disableGutters>
          <Carousel images={product.images} alt={product.title} />
        </ImageContainer>
        <DataContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDetailsSection>
            <ProductDetails product={product} />
          </ProductDetailsSection>
          <ProductDescriptionSection>
            <ProductDescriptionTitle>
              Descrição do produto
            </ProductDescriptionTitle>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductDescriptionSection>
        </DataContainer>
      </>
    );

  return <ProductLoading />;
}

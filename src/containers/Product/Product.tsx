import { Product } from '@/services';
import { Carousel } from '@/components/Carousel';
import { ProductDetails } from './components';
import {
  ImageContainer,
  DataContainer,
  ProductTitle,
  ProductDetailsSection,
  ProductDescriptionSection,
  ProductDescriptionTitle,
  ProductDescription,
} from './Product.types';

interface ProductContainerProps {
  product?: Product;
  isLoading: boolean;
}

export function ProductContainer({
  product,
  isLoading,
}: ProductContainerProps) {
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

  return <p>Carregando...</p>;
}

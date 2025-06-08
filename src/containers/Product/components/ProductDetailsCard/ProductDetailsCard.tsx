import {
  StyledProductDetailsCard,
  ProductDetailsCardTitle,
  ProductDetailsCardDescription,
} from './ProductDetailsCard.styles';

interface ProductDetailsCardProps {
  title: string;
  description: string | number;
}

export function ProductDetailsCard({
  title,
  description,
}: ProductDetailsCardProps) {
  return (
    <StyledProductDetailsCard>
      <ProductDetailsCardTitle>{title}</ProductDetailsCardTitle>
      <ProductDetailsCardDescription>
        {description}
      </ProductDetailsCardDescription>
    </StyledProductDetailsCard>
  );
}

import { Container } from '@mui/material';
import {
  DescriptionLoading,
  DescriptionTitleLoading,
  DetailsContainerLoading,
  DetailsLoading,
  DetailsTitleLoading,
  ImageLoading,
  TitleLoading,
} from './ProductLoading.types';
import { DataContainer } from '../../Product.types';

export function ProductLoading() {
  return (
    <>
      <Container disableGutters>
        <ImageLoading variant="rounded" />
      </Container>
      <DataContainer data-testid="product-loading">
        <TitleLoading variant="text" />
        <DetailsTitleLoading variant="text" />
        <DetailsContainerLoading>
          <DetailsLoading variant="rounded" />
          <DetailsLoading variant="rounded" />
        </DetailsContainerLoading>
        <DescriptionTitleLoading variant="text" />
        <DescriptionLoading variant="rounded" />
      </DataContainer>
    </>
  );
}

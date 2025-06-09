import {
  ButtonLoading,
  ImageLoading,
  LoadingContainer,
  LoadingContent,
  SubTitleLoading,
  TitleLoading,
} from './ProductListLoading.styles';

export function ProductListLoading() {
  return (
    <LoadingContainer data-testid="products-loading">
      <ImageLoading variant="rounded" />
      <LoadingContent>
        <TitleLoading variant="text" />
        <SubTitleLoading variant="text" />
        <ButtonLoading variant="rounded" />
      </LoadingContent>
    </LoadingContainer>
  );
}

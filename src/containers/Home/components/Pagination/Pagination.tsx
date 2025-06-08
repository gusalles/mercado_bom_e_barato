import { PaginationProps } from '@mui/material';
import { PaginationItem, StyledPagination } from './Pagination.styles';

export function Pagination(props: PaginationProps) {
  return (
    <StyledPagination
      {...props}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
}

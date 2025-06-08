import { Pagination as MuiPagination, PaginationProps } from '@mui/material';
import { PaginationItem } from './Pagination.styles';

export function Pagination(props: PaginationProps) {
  return (
    <MuiPagination
      {...props}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
}

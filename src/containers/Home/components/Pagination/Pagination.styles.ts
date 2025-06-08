import {
  PaginationItem as MuiPaginationItem,
  Pagination,
  PaginationProps,
  PaginationItemProps,
  styled,
} from '@mui/material';

export const StyledPagination = styled(Pagination)<PaginationProps>(() => ({
  '& .MuiPaginationItem-previousNext': {
    display: 'none',
  },
}));

export const PaginationItem = styled(MuiPaginationItem)<PaginationItemProps>(
  ({ theme, selected }) => ({
    backgroundColor: 'transparent',
    color: selected ? '#61330F' : theme.palette.text.primary,
    fontSize: '1rem',
    padding: '20px 0',

    '&:hover': {
      backgroundColor: 'transparent',
    },

    '&.MuiPaginationItem-root': {
      width: 56,
      height: 56,
      [theme.breakpoints.down('md')]: {
        width: 32,
        height: 32,
      },
    },
    '&.Mui-selected': {
      backgroundColor: '#FFE5C7',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: '#FFE5C7',
      },
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  })
);

import {
  PaginationItem as MuiPaginationItem,
  PaginationItemProps,
  styled,
} from '@mui/material';

export const PaginationItem = styled(MuiPaginationItem)<PaginationItemProps>(
  ({ theme, selected }) => ({
    width: 56,
    height: 56,
    backgroundColor: 'transparent',
    color: selected ? '#61330F' : theme.palette.text.primary,
    fontSize: '1rem',
    padding: '20px 0',

    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      backgroundColor: '#FFE5C7',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: '#FFE5C7',
      },
    },
  })
);

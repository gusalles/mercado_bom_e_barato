import { categoriesQueryKey, useCategories } from '@/queries';
import { getCategories } from '@/services';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [categoriesQueryKey],
    queryFn: getCategories,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data, error, isFetching } = useCategories();

  const onClickCategory = async (categoryId: string) => {
    try {
      const res = await axios.get(`/api/categories/${categoryId}`);
      console.log('Category data:', res.data);
    } catch (error) {
      console.log('Error fetching category:', error);
    }
  };

  return (
    <>
      <Typography variant="h1">Mercado B&B</Typography>
      {isFetching && <p>Carregando...</p>}
      {data && (
        <List
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 2,
          }}
        >
          {data.map((category: any) => (
            <ListItem key={category.id}>
              <ListItemButton onClick={() => onClickCategory(category.id)}>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      {error && <p>{error.message}</p>}
    </>
  );
}

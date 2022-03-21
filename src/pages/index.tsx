import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Image {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface GetImagesResponse {
  after: string;
  data: Image[];
}
export default function Home(): JSX.Element {
  async function fetchImages({ pageParam = null }): Promise<GetImagesResponse> {
    const { data } = await api('/api/images', {
      params: {
        after: pageParam,
      },
    });
    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    fetchImages,

    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: lastPage => (lastPage ? lastPage?.after : null),
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    return data?.pages.map(page => page.data).flat();
  }, [data]);

  // TODO RENDER LOADING SCREEN
  return isLoading ? (
    <Loading />
  ) : // TODO RENDER ERROR SCREEN
  isError ? (
    <Error />
  ) : (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button
            mt="40px"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}

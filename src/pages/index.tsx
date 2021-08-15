import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  async function getImages({ pageParam = 0 }): Promise<any> {
    const response = await api.get(`/api/images?after=${pageParam}`);
    return response.data;
  }
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', getImages, {
    getNextPageParam: (lastPage, page) => {
      if (lastPage.after) {
        console.log('last', lastPage);
      }
    },
  });

  const formattedData = useMemo(() => {
    console.log('data', data);
    const pages = data?.pages.flat();
    console.log('pageFlat', pages);
    const images = pages.map(page => {
      return page;
    });
    return images;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}

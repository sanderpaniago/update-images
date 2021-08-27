import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [urlImageActive, setUrlImageActive] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleOpenModalImage(urlImage) {
    setUrlImageActive(urlImage);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards?.map(card => {
          return (
            <Box
              key={card.ts}
              height="290px"
              bg="pGray.800"
              borderRadius="md"
              onClick={() => handleOpenModalImage(card.url)}
            >
              <Image
                src={card.url}
                alt={card.title}
                width="100%"
                height="192px"
                objectFit="cover"
                borderTopRadius="md"
              />
              <Box p="4">
                <Heading fontSize="2xl">{card.title}</Heading>
                <Text mt="2">{card.description}</Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={urlImageActive}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

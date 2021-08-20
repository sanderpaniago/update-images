import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()} isCentered>
      <ModalOverlay />
      <ModalContent bg="pGray.800" maxW={900} maxH={600} w="fit-content">
        <ModalBody orderTopRadius="md" w="fit-content" p="0" bg="transparent">
          <Image
            src={imgUrl}
            width="100%"
            height="100%"
            maxW={900}
            maxH={600}
            borderTopRadius="md"
            objectFit="contain"
          />
        </ModalBody>
        <ModalFooter
          width="100%"
          bg="pGray.800"
          justifyContent="flex-start"
          borderBottomRadius="md"
        >
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

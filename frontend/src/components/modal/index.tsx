import {ScheduleList} from '../../pages/dashboard'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
} from '@chakra-ui/react';

interface ModalInfoProps{
  isOpen:boolean;
  onOpen:()=>void;
  onClose:()=>void;
  data:ScheduleList;
  finishService:()=>Promise<void>;
}

export function ModalInfo({isOpen,onOpen,onClose,data,finishService}:ModalInfoProps){
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Proximo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align='center'>
            <Text>Teste Modal</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
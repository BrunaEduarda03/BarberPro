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
  Button,
} from '@chakra-ui/react';
import { FiScissors, FiUser } from 'react-icons/fi';
import { FaMoneyBillAlt } from 'react-icons/fa';
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
      <ModalContent bg='barber.400' >
        <ModalHeader color='#f1f1f1'>Próximo</ModalHeader>
        <ModalCloseButton size='lg' color='button.danger' />
        <ModalBody>
        
          <Flex align='center' direction='row'mb={4} >
            <FiUser size={28} color='#FFB13e' />
            <Text  ml={4} color='#f1f1f1' fontWeight='bold' fontSize='1xl'>
              {data?.customer}
            </Text>
          </Flex>

          <Flex align='center' direction='row' mb={4} >
            <FiScissors size={26} color='#FFF' />
            <Text  ml={4} color='#f1f1f1' fontWeight='bold' fontSize='1xl'>
              {data?.haircuts?.name}
            </Text>
          </Flex>

          <Flex align='center' direction='row' mb={4} >
            <FaMoneyBillAlt size={26} color='#46ef75' />
            <Text  ml={4} color='#f1f1f1' fontWeight='bold' fontSize='1xl'>
              R$ {data?.haircuts?.price}
            </Text>
          </Flex>

          <ModalFooter>
            <Button 
            bg='button.cta' 
            color='white' 
            _hover={{bg:'#FFB13E'}}
            mr={2}
            onClick={()=>finishService()}
            >
              Finalizar Serviço
            </Button>
          </ModalFooter>
        
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
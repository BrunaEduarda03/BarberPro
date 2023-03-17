import { ModalInfo } from "@/components/modal";
import { Sidebar } from "@/components/siderbar";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Link as ChakraLink, Text, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { toast } from "react-toastify";

export interface ScheduleList{
  id:string;
  customer:string;
  haircuts:{
    id:string;
    name:string;
    price: number | string;
    status:boolean;
    user_id: string;
  }
}

interface ScheduleProps{
  schedule:ScheduleList[];
}

export default function Dashboard({schedule}:ScheduleProps){
  const [list,setList] = useState(schedule);
  const {isOpen,onOpen,onClose} = useDisclosure();
  const [service,setService] = useState<ScheduleList>();

  function handleOpenModal(item:ScheduleList){
    setService(item);   //console.log(item);
    onOpen();   
  }
  async function handleFinish(id:string){
    try{
      const apiClient = setupAPIClient();
      await apiClient.delete('/schedule',{
        params:{
          schedule_id:id
        }
      })
      onClose();
      toast.success('Finalizado serviço!');
      const filterItem = list.filter((item)=>item?.id !== id);
      setList(filterItem);

    }catch(err){
      console.log(err);
      toast.error('Erro ao finalizar o serviço!');
      
    }
    
  }
  return (
    <>
      <Head>
        <title>BarberPro - Minha Barbearia</title>
      </Head>
      <Sidebar>
        <Flex ml={7} mt={10} mr={5} align="flex-start" justify="flex-start" direction='column'>
          <Flex 
            mt={10}  
            direction='row' 
            w='100%' 
            align='center'
            justifyContent="flex-start"
            mb={10}
            
          >
            <Heading 
              color='#FFF' 
              fontWeight='bold' 
              fontSize='3xl' 
              mr={5}
            >
              Agenda
            </Heading>
            
            <Link  href='/new'>
              <Button 
                bg='barber.400' 
                color='#FFF' 
                p={4}
                rounded={6}
                _hover={{bg:'transparent'}}
              >
                Registrar
              </Button>
            </Link>
          </Flex>

            {list?.map((item)=>(
            <ChakraLink 
             w='100%'
             key={item?.id}
             m={0}
             p={0}
             mt={1}
             bg="transparent" 
             style={{ textDecoration: 'none' }}
             onClick={()=>handleOpenModal(item)}  
             >
            <Flex 
              bg='barber.400' 
              w='100%' 
              direction='row' 
              align='center' 
              justifyContent='space-between'
              p={4}
              mb={5}
            >
                 <Flex direction='row'  align='center' justify='center'>
                   <IoMdPerson size={25} color='#F1F1F1' />
                   <Text ml={4} color='#FFF' fontWeight='bold' noOfLines={1}>
                     {item?.customer}
                   </Text>
                 </Flex>
                 <Text ml={5} color='#FFF' fontWeight='bold'>{item?.haircuts?.name}</Text>
                 <Text ml={5} color='#FFF' fontWeight='bold'>R$ {item?.haircuts?.price}</Text>
              
            
            </Flex>
            </ChakraLink>
            ))}

          </Flex>
      </Sidebar>

      <ModalInfo
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        data={service}
        finishService={async()=>handleFinish(service.id)}
              
      />
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
  try{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('schedules');
    console.log(response.data);
    
    return{
      props:{
        schedule:response.data
      }
    }

  }catch(err){
    console.log(err);
    return{
      redirect:{
        destination:'/dashboard',
        permanent:false
      }
    }
    

  }
  
})
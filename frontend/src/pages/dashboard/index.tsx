import { Sidebar } from "@/components/siderbar";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";

interface HaircutItems{
  id:string;
  name:string;
  price: number | string;
  status:boolean;
  user_id: string;
}

interface HaircutsList{
  id:string;
  customer:string;
  haircuts:HaircutItems;
}

interface HaircutProps{
  haircuts:HaircutsList[];
}

export default function Dashboard({haircuts}:HaircutProps){
  return (
    <>
      <Head>
        <title>BarberPro - Minha Barbearia</title>
      </Head>
      <Sidebar>
        <Flex ml={7} mt={10} mr={5} align='flex-start' justifyContent='flex-start' direction='column'>
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

            {haircuts?.map((item)=>(
            <ChakraLink w='100%' key={item?.id}>
            <Flex 
              bg='barber.400' 
              w='100%' 
              direction='column' 
              align='center' 
              justifyContent='center'
              p={4}
              mb={5}
            >
             
                 <Flex   w='100%' direction='row' align='center' justify='space-between'>
                 <Flex direction='row'  align='center'>
                   <IoMdPerson size={25} color='#FFF' />
                   <Text ml={4} color='#FFF' fontWeight='bold'>
                     {item?.customer}
                   </Text>
                 </Flex>
                 <Text ml={5} color='#FFF' fontWeight='bold'>{item?.haircuts?.name}</Text>
                 <Text ml={5} color='#FFF' fontWeight='bold'>R$ {item?.haircuts?.price}</Text>
               </Flex>
             
              
            </Flex>
            </ChakraLink>
            ))}

          </Flex>
      </Sidebar>
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
        haircuts:response.data
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
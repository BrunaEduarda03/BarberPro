import { Sidebar } from "@/components/siderbar";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import {IoMdPricetag} from 'react-icons/io'

interface HaircutsItem{
  id: string;
  name: string;
  price: number | string;
  user_id: string;
}

interface HaircutsProps{
  haircuts:HaircutsItem[];
}

export default function Haircuts({haircuts}:HaircutsProps){
  const [isMobile] = useMediaQuery("(max-width: 620px)");
  const [list,setList] = useState<HaircutsItem[]>(haircuts || []);
  const [haircutDisabled,setHaircutDisabled] = useState('enabled');

  async function handleChangeSwich(e:ChangeEvent<HTMLInputElement>){
    const apiClient = setupAPIClient();
    if(e.target.value === 'disabled'){
      setHaircutDisabled('enabled');
      const response = await apiClient.get('/haircuts',
    {
      params:{
        status: true,
      }
    })
    setList(response.data);
      
    }
    else{
      setHaircutDisabled('disabled');
      const response = await apiClient.get('/haircuts',
    {
      params:{
        status: false,
      }
    })
    setList(response.data);
    }
  }
  return (
    <>
      <Head>
        <title>Modelos de corte - BarberPro</title>
      </Head>
      <Sidebar>
      <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">
        <Flex 
          mt={10}  
          direction={isMobile ? 'column' : 'row'} 
          w='100%' 
          alignItems={isMobile ? 'flex-start': 'center'} 
          justifyContent="flex-start"
          mb={10}
       >
          <Heading 
            color='orange.900'
            fontWeight='bold'
            fontSize={isMobile? '28px':'3xl'}
            mr={6}
            mt={10}
            ml={5}
            >
            Modelos de corte
          </Heading>

          <Link href='/haircuts/new'>
            <Button 
              background='barber.400'
              color='button.default'
              mr={6}
              mt={10}
              ml={isMobile?5:0}
              _hover={{bg:'transparent'}}
              >Cadastrar Novo
            </Button>
          </Link>

          <Stack 
            ml='auto'
            direction='row'
            align='center'
            mr={6}
            mt={isMobile?-28:10}
            >
              <Text color='button.default'>ATIVOS</Text>
              <Switch 
                size='lg' 
                colorScheme='green'
                value={haircutDisabled}
                onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChangeSwich(e)}
                isChecked={haircutDisabled === 'enabled' ? true : false}
                
                />
          </Stack>
        </Flex>

        {list.map((item)=>{
          return(
            <Link href={`/haircuts/${item.id}`} passHref legacyBehavior key={item.id}>
            <Flex
              cursor="pointer"
              w="97%"
              p={4}
              bg="barber.400"
              direction="row"
              rounded="4"
              mb={5}
              ml={5}
              justifyContent="space-between" 
            >
              <Flex direction='row' justifyContent='center' alignItems="center" >
              <IoMdPricetag size={28} color="#fba931" />
              <Text  ml={5} color='#fff'>{item.name}</Text>
              </Flex>
              <Text fontWeight="bold" ml={5} color='#fff'>R$ {item.price}</Text>
              
            </Flex>
            </Link>
          )
        })}


            


      </Flex>
      </Sidebar>
    </>
  )
}
export const getServerSideProps = canSSRAuth(async (ctx) => {

  try{

    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/haircuts',
    {
      params:{
        status: true,
      }
    })


    if(response.data === null){
      return{
        redirect:{
          destination: '/dashboard',
          permanent: false,
        }
      }
    }


    return{
      props: {
        haircuts: response.data
      }
    }

  }catch(err){
    console.log(err);
    return{
      redirect:{
        destination: '/dashboard',
        permanent: false,
      }
    }
  }
});
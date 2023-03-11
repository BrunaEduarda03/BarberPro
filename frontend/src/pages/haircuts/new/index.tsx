import { Sidebar } from "@/components/siderbar";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Input, Stack, Switch, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import {  IoIosArrowBack } from "react-icons/io";

interface NewHaircutProps{
  subscription: boolean;
  count: number;
}

export default function New({subscription,count}:NewHaircutProps){
  return (
    <>
    <Head>
      <title>Novo Modelo - BarberPro</title>
    </Head>

    <Sidebar>
    <Flex direction="column" alignItems="flex-start" justifyContent="flex-start" >
        <Flex 
          mt={10}  
          direction='row' 
          w='100%' 
          align='center'
          justifyContent="flex-start"
          mb={10}
          ml={5}
       >
        <Link href='/haircuts' >
          
          <Button 
            background='barber.400'
            color='button.default'
            mt={10}
            pl={3}
            alignItems='center'
            size='lg'
            _hover={{bg:'transparent'}}
            >
              <IoIosArrowBack size={28} color='#FFF' />
              Voltar
          </Button>
          </Link>
          <Heading 
            color='orange.900'
            fontWeight='bold'
            fontSize='3xl'
            mr={6}
            mt={10}
            ml={7}
            >
            Modelos de corte
          </Heading>
        </Flex>

        <Flex  w='95%' bg='barber.400' alignItems='center' justifyContent='center' ml={7}  >
          <Flex  w='85%' direction='column' alignItems='center' mb={10}>
          <Text mt={10} color='#FFF' fontSize='4xl' fontWeight='bold' mb={7}>
            Cadastrar Modelo
          </Text>
          
          <Input 
            type='text'
            size='lg'
            rounded={6}
            placeholder="Nome do Corte"
            mb={5}
            disabled={!subscription && count >= 3}
          />
          <Input 
            type='text'
            size='lg'
            rounded={6}
            mb={5}
            placeholder="Preço exemplo:45.90"
            disabled={!subscription && count >= 3}
          />
          <Button 
            w='100%' 
            mb={4} 
            bg= 'button.cta'
            _hover={{bg:'#ffb13e'}}
            disabled={!subscription && count >= 3}
            cursor={!subscription && count >= 3?'not-allowed':'pointer'}
            
            >Cadastrar
          </Button>

          {!subscription && count >= 3 && (
              <Flex direction="row" align="center" justifyContent="center">
                <Text color='#FFF'>
                  Você atingiou seu limite de corte.
                </Text>
                <Link href="/planos">
                  <Text fontWeight="bold" color="#31FB6A" cursor="pointer" ml={1}>
                    Seja premium
                  </Text>
                </Link>
              </Flex>
            )}

        </Flex>
        </Flex>

        </Flex>
    </Sidebar>

    
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  try{
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/haircut/check')
    const count = await apiClient.get('/haircut/count')
    console.log(count);
    
    return {
      props: {
        subscription: response.data?.subscriptions?.status === 'active' ? true : false,
        count: count.data
      }
    }

  }catch(err){
    console.log(err);

    return{
      redirect:{
        destination: '/dashboard',
        permanent:false,
      }
    }
  }

})
import { Sidebar } from "@/components/siderbar";
import { Button, Flex, Heading, Input, Stack, Switch, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import {  IoIosArrowBack } from "react-icons/io";

export default function New(){
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
            ml={5}
            >
            Modelos de corte
          </Heading>
        </Flex>

        <Flex  w='97%' bg='barber.400' alignItems='center' justifyContent='center' ml={5} >
          <Flex  w='85%' direction='column' alignItems='center' >
          <Text mt={10} color='#FFF' fontSize='4xl' fontWeight='bold' mb={7}>
            Cadastrar Modelo
          </Text>
          
          <Input 
            type='text'
            size='lg'
            rounded={6}
            placeholder="Nome do Corte"
            mb={5}
          />
          <Input 
            type='text'
            size='lg'
            rounded={6}
            mb={5}
            placeholder="Preço exemplo:45.90"
          />
          <Button 
            w='100%' 
            mb={4} 
            bg= 'button.cta'
            _hover={{bg:'#ffb13e'}}
            >Cadastrar</Button>

          <Text mb={10}  color='#FFF' fontSize='xl' >
            Voce atingiu seu limite de cortes.<strong> Seja Premium</strong> e tenha acesso ilimitado!
          </Text>

        </Flex>
        </Flex>

        </Flex>
    </Sidebar>

    
    </>
  )
}
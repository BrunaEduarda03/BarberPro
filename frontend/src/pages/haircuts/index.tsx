import { Sidebar } from "@/components/siderbar";
import { Button, Flex, Heading, Stack, Switch, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import {IoMdPricetag} from 'react-icons/io'

export default function Haircuts(){
  const [isMobile] = useMediaQuery("(max-width: 620px)")
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
              <Switch size='lg' colorScheme='green'/>
          </Stack>
        </Flex>

          <Link href='/haircuts/123' passHref legacyBehavior>
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
              <Text  ml={5} color='#fff'>Corte Completo</Text>
              </Flex>
              <Text fontWeight="bold" ml={5} color='#fff'>R$ 69,99</Text>
              
            </Flex>
            </Link>


            <Link href='/haircuts/123' passHref legacyBehavior>
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
              <Text  ml={5} color='#fff'>Corte Completo</Text>
              </Flex>
              <Text fontWeight="bold" ml={5} color='#fff'>R$ 69,99</Text>
              
            </Flex>
            </Link>


      </Flex>
      </Sidebar>
    </>
  )
}
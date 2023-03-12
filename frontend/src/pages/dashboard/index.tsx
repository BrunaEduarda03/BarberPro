import { Sidebar } from "@/components/siderbar";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";

export default function Dashboard(){
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

          
            <ChakraLink w='100%'>
            <Flex 
              bg='barber.400' 
              w='100%' 
              direction='row' 
              align='center' 
              justifyContent='center'
              p={4}
            >
              <Flex w='100%' direction='row' align='center' justify='space-between'>
                <Flex direction='row'  align='center'>
                  <IoMdPerson size={25} color='#FFF' />
                  <Text ml={4} color='#FFF' fontWeight='bold'>
                    Jailton Maciel
                  </Text>
                </Flex>
                <Text ml={5} color='#FFF' fontWeight='bold'>Corte Normal</Text>
                <Text ml={5} color='#FFF' fontWeight='bold'>R$ 29.99</Text>
                  
              </Flex>
              
            </Flex>
            </ChakraLink>

          </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
  return{
    props:{

    }
  }
})
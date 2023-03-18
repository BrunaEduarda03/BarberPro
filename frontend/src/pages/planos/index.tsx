import Head from 'next/head';
import {
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery
} from '@chakra-ui/react'
import { Sidebar } from '../../components/siderbar';
import { canSSRAuth } from '@/utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';

interface PlanProps{
  premium: boolean;
}

export default function Planos({premium}:PlanProps){
  const [isMobile] = useMediaQuery('(max-width: 500px)')
  // console.log(premium);
  
  return(
    <>
      <Head>
        <title>Barber Pro - Sua assinatura Premium</title>
      </Head>
      <Sidebar>
        <Flex w="100%" direction="column" align="flex-start" justify="flex-start" mt={10} ml={10} mb={10}>
          <Heading color="white" fontSize="3xl" mt={4} mb={4} mr={4}>
            Planos
          </Heading>
        </Flex>

        <Flex ml={10} pb={8} maxW="780px" w="90%" direction="column" align="flex-start" justify="flex-start">
        <Flex gap={4} w="100%" flexDirection={isMobile ? "column" : "row"}>
          <Flex rounded={4} p={2} flex={1} bg="barber.400" flexDirection="column">
            <Heading
              textAlign="center"
              fontSize="2xl"
              mt={5} mb={5}
              color="gray.100"
            >
              Plano Grátis
            </Heading>

            <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
              Registrar cortes.
            </Text>
            <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
              Criar apenas 3 modelos de corte.
            </Text>
            <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
              Editar dados do perfil.
            </Text>

            </Flex> 
              <Flex rounded={4} p={2} flex={1} bg="barber.400" flexDirection="column">
                <Heading
                textAlign="center"
                fontSize="2xl"
                mt={5} mb={5}
                color="#31fb6a"
                >
                  Plano Premium
                </Heading>

                <Text color='#FFF' fontWeight="bold" ml={4} mb={4}>
                  Registrar cortes ilimitados.
                </Text>
                <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
                  Criar modelos ilimitados.
                </Text>
                <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
                  Editar modelos de corte.
                </Text>
                <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
                  Editar dados do perfil.
                </Text>
                <Text color='#FFF'fontWeight="bold" ml={4} mb={4}>
                  Receber todas atualizações.
                </Text>

                {premium ? (
                <Flex direction='column'>
                  <Button
                    bg="#000"
                    m={2}
                    color="white"
                    _hover={{bg:'#313131b4'}}
                    onClick={() => {}}
                    >
                    VOCÊ JÁ É PREMIUM
                  </Button>
                  <Button
                  bg="#fff"
                  m={2}
                  color="#000"
                  _hover={{bg:'#313131b4'}}
                  onClick={() => {}}
                  >
                  ALTERAR ASSINATURA
                </Button>
          </Flex>
         ):(
          <Flex direction='column' >
            <Text ml={4} color="#31fb6a" fontWeight='bold' fontSize='3xl'>R$ 9,99</Text>
            <Button
              bg="button.cta"
              m={2}
              color="white"
              _hover={{bg:'#ffb13e'}}
              onClick={() => {}}
            >
              VIRAR PREMIUM
            </Button>
          </Flex>
         )}
              </Flex>
              
          </Flex>  
        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async(ctx)=>{
  try{
    const apiCLiente = setupAPIClient(ctx);
    const response = await apiCLiente.get('/details');
    
    return {
      props:{
        premium:response.data?.subscriptions?.status === 'active' ? false:true,
      }
    }

  }catch(err){
    console.log(err);
    return {
      redirect:{
        destination:'/destination',
        permanent:false,
      }
    }
    
  }
})
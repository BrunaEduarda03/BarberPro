import { Sidebar } from "@/components/siderbar";
import { AuthContext } from "@/context/AuthContext";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Box, Button, Flex, Heading, Input, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useContext, useState } from "react";

interface UserProps{
  id: string;
  name: string;
  email: string;
  endereco: string | null;
}

interface ProfileProps{
  user: UserProps;
  premium: boolean;
}

export default function Profile({user,premium}:ProfileProps){
  const {logOut} = useContext(AuthContext);
  const [name,setName] = useState(user && user?.name);
  const [endereco,setEndereco] = useState(user?.endereco ?user?.endereco : '');


  async function handleLogOut(){
    await logOut();
  }
  return (
    <>
      <Head>
        <title>Minha Conta - BarberPro</title>
      </Head>

      <Sidebar>
        <Flex justifyContent='flex-start' alignItems='flex-start' flexDirection='column' ml={10} mt={20}>

          <Flex width='100%' flexDirection='row' alignItems='center' justifyContent='flex-start' >
            <Heading fontSize="3xl" fontWeight="bold" color="orange.900" mb={8}>
              Minha Conta
            </Heading>
          </Flex>

          <Flex background='barber.400' width='100%' maxW='700px' pt={8} pb={8} direction='column'>
            
            <Flex direction='column' ml={10}  width='90%'>
              <Text 
                color='button.default' fontWeight='bold' mb={3} fontSize='xl'>
                  Nome da barbearia:
              </Text>
              <Input 
                w='100%'
                background='barber.900'
                placeholder="Nome da barbearia"
                type='text'
                size='lg'
                border='none'
                color='#FFF'
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </Flex>

            <Flex direction='column' mt={8} ml={10}  width='90%'>
              <Text 
                color='button.default' fontWeight='bold' mb={3} fontSize='xl'>
                  Endereço:
              </Text>
              <Input 
                width='100%'
                background='barber.900'
                placeholder="Endereço da barbearia"
                type='text'
                size='lg'
                border='none'
                color='#FFF'
                value={endereco}
                onChange={(e)=>setEndereco(e.target.value)}
              />
            </Flex>

            <Flex direction='column' mt={8} ml={10}  width='90%'> 
              <Text 
                color='button.default' fontWeight='bold' mb={3} fontSize='xl'>
                  Plano Atual:
              </Text>

              <Flex 
                borderWidth={1} 
                p={2} 
                mb={3} 
                direction='row' 
                w='100%' 
                rounded={6} 
                border='1px solid' 
                background='barber.900' 
                justifyContent='space-between'
                alignItems='center'
                >
                <Text 
                  color={premium?'#ffb13e' :'#4dffb4' }
                  fontSize='lg'
                  >
                    {premium ? 'Plano Premium':'Plano Grátis'}
                </Text>
                <Link href="/planos" >
                  <Box 
                    fontSize='lg'
                    color='button.default' 
                    rounded={4} 
                    p={1}
                    background='#00CD52'
  
                  >
                    Mudar de plano
                  </Box>
                </Link>
              </Flex>

              <Button
                w='100%'
                background='button.cta'
                mb={4}
                size='lg'
                _hover={{bg:'#ffb13e'}}
              >
                Salvar
              </Button>

              <Button
                w='100%'
                bg='transparent'
                mb={4}
                size='lg'
                color='red.500'
                borderColor='red.500'
                border='1px'
                _hover={{bg:'transparent'}}
                onClick={handleLogOut}
              >
                Sair da conta
              </Button>

            </Flex>
          </Flex>

        </Flex>
      </Sidebar>
    
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{

  try {
    const apiCLient = setupAPIClient(ctx);
    const response = await apiCLient.get('/details');
    const user = {
      id:response.data.id,
      name:response.data.name,
      email:response.data.email,
      endereco:response.data.endereco
    }
    return {
      props:{
        user: user,
        premium:response.data.subscriptions?.status === 'active' ? true:false
      }
    }
    
  }catch(error){
    console.log(error);

    return{
      redirect:{
        destination:'/dashboard',
        permanent:false
      }
    }
  }
 
})


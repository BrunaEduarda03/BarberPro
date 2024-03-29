import { AuthContext } from '@/context/AuthContext'
import { canSSRGuest } from '@/utils/canSSRGuest'
import { Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import logo from '../../public/logo.svg'

export default function Home() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  async function handleLogin(){
    if(email === '' && password === '') {
      toast.error('Preencha todos os campos!');
      return;
    }
    await signIn({email,password});
     toast.success('Bem-vindo de volta!')
  }

  return (
    <>
      <Head> 
        <title>BarberPro - Seu Sistema Completo</title>
      </Head>
      <Flex background='barber.900' height='100vh' alignItems='center' justifyContent='center' >
        <Flex width={640} direction='column' p={14} border='none' rounded={8}>
        <Center>
        <Image 
          alt='barberpro' 
          src={logo}
          quality={100} 
          objectFit='fill'
          width={300}
        />
         </Center>
          <Input 
            placeholder="Digite seu E-mail"
            type="email"
            background='barber.400'
            size='lg'
            variant='filled'
            mb={3}
            mt={12}
            value={email}
            color='button.default'
            onChange={(e)=>setEmail(e.target.value)}
            />
          <Input 
            placeholder="*********"
            type="password"
            background='barber.400'
            size='lg'
            mb={6}
            variant='filled'
            value={password}
            color='button.default'
            onChange={(e)=>setPassword(e.target.value)}
            />
          <Button
            background='button.cta' 
            color='gray.900' 
            size='lg'
            _hover={{bg:'#F6AD55'}}
            onClick={handleLogin}
          >Acessar
          </Button>
          <Center>
          <Link href='/signup'>
            <Text color='button.default' mt={3}cursor='pointer'>
              Ainda não possui uma conta?<strong> Clique Aqui!</strong>
            </Text>
          </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async(ctx)=>{
  return {
    props:{}
  }
})
import { AuthContext } from "@/context/AuthContext";
import { Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import logo from '../../../public/logo.svg'

export default function Signup(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signUp} = useContext(AuthContext);

  async function handleRegister(){
    if(name === '' && email === '' && password === '') return;
    await signUp({name,email,password});
     
  }
  return (
    <>
      <Head>
        <title>BarberPro - Cadastre-se</title>
      </Head>

      <Flex background='barber.900' height='100vh' alignItems='center' justifyContent='center' >
        <Flex width={640} direction='column' p={14} border='none' rounded={8}>
        <Center>
          <Image src={logo} alt='logo' width={300}  />
        </Center>

        <Input 
          type='text'
          placeholder="Digite seu Nome"
          size='lg'
          background='barber.400'
          variant='filled'
          mb={3}
          mt={10}
          value={name}
          color='button.default'
          onChange={(e)=>setName(e.target.value)}
        />
        <Input 
          type='text'
          placeholder="Digite seu E-mail"
          size='lg'
          background='barber.400'
          variant='filled'
          mb={3}
          value={email}
          color='button.default'
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Input 
          type='password'
          placeholder="***********"
          size='lg'
          background='barber.400'
          variant='filled'
          mb={6}
          value={password}
          color='button.default'
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button 
        background='button.cta' 
        mb={3} 
        _hover={{bg:'#F6AD55'}}
        onClick={handleRegister}
        >
          Cadastrar
        </Button>
        <Center>
          <Link href='/'>
            <Text color='button.default'>Já possui uma conta.<strong> Faça Login!</strong></Text>
          </Link>
        </Center>
        </Flex>
      </Flex>
    </>
  )
}
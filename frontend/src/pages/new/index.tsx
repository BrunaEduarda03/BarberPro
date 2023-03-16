import { Sidebar } from "@/components/siderbar";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"; 
import { toast } from "react-toastify";

interface HaircutItems{
  id: string;
  name: string;
  price: number | string;
  status:boolean;
  user_id: string;
}
interface HaircutProps{
  haircuts:HaircutItems[];
}

export default function NewSchedule({haircuts}:HaircutProps){
  const [name,setName] = useState('');
  const [selectHaircut,setSelectHaircut] = useState(haircuts[0]);

  function handleChangeSelect(id:string){
    const haircutItem = haircuts.find(item =>item.id === id);
    setSelectHaircut(haircutItem);
  }

  async function handleRegister(){
    try{
      const apiClient = setupAPIClient();
      const response = await apiClient.post('/schedule',{
        customer:name,
        haircut_id:selectHaircut?.id
      })
      Router.push('/dashboard');
      toast.success('Cadastrado com sucesso!');
    }catch(err){
      console.log(err);
      toast.error('Não foi possivel cadastrar!');
    }
  }
  return (
    <>
      <Head>
        <title>BarberPro - Novo Agendamento</title>
      </Head>

      <Sidebar>
        <Flex ml={7} mt={10} mr={5} align='flex-start' justifyContent='flex-start' direction='column'>
          <Flex  
            direction='row' 
            w='100%' 
            align='center'
            justifyContent="flex-start"
          >
          <Link href='/dashboard' >
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
              color='button.default' 
              size='2xl'
              mt={10}
              ml={5}
            >
              Novo Serviço
            </Heading>
          </Flex>

          <Flex 
            
            pt={10}
            pb={10}
            width="95%"
            direction="column"
            align="center"
            justify="center"
            bg="barber.400"
            mt={10}
          >
              <Input 
                w="85%"
                mb={3}
                bg='barber.900'
                 placeholder="Nome do cliente"
                 type='text'
                 size='lg'
                 color='#FFF' 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
              />
              
              <Select color='#595454fb' bg="barber.900" mb={3} size="lg" w="85%" onChange={ (e) => handleChangeSelect(e.target.value) }>
              {haircuts?.map( item => (
                <option key={item?.id} value={item?.id}>{item?.name}</option>
              ))}
            </Select>
              

              <Button
                w='85%'
                bg='button.cta'
                size='lg'
                onClick={handleRegister}
                _hover={{ bg: '#FFb13e' }}
              >
                Registrar
              </Button>
            </Flex>

          </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async(ctx)=>{
  try{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/haircuts',{
      params:{
        status:true,
      }
    })
    console.log(response.data);
  
    if(response === null ){
      return{
        redirect:{
          destination:'/dashboard',
          permanent:false
        }
      }
    }
    return{
      props:{
          haircuts:response.data,
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
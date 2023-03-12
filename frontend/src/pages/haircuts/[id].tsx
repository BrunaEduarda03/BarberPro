import { Sidebar } from "@/components/siderbar"
import { setupAPIClient } from "@/services/api"
import { canSSRAuth } from "@/utils/canSSRAuth"
import { Button, Flex, Heading, Input, Switch, Text } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"

import { ChangeEvent, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { toast } from "react-toastify"

interface HaircutItems{
  id: string;
  name: string;
  price: number | string;
  status:boolean;
  user_id: string;
}

interface SubscriptionsProps{
  id: string;
  status:string;
}

interface HaircutProps{
  haircut:HaircutItems;
  subscriptions:SubscriptionsProps | null;

}

export default function EditHaircuts({haircut,subscriptions}:HaircutProps){
  const [name,setName] = useState(haircut?.name);
  const [price,setPrice] = useState(haircut?.price);
  const [status,setStatus] = useState(haircut?.status);
  const [switchDisabled,setSwitchDisabled] = useState(haircut?.status ? 'disabled':'enabled');

  async function handleChangeSwich(e:ChangeEvent<HTMLInputElement>){
    if(e.target.value === 'enabled'){
      setSwitchDisabled('disabled');
      setStatus(true);
    }else{
      setSwitchDisabled('enabled');
      setStatus(false);
    }
  }

  async function handleEdit(){
    try{
      if(name === '' && price === ''){
        toast.warn('Preencha todos os campos!');
        return;
      }
      const apiClient = setupAPIClient();
      const response = await apiClient.put('haircut',{
        name:name,
        price:Number(price),
        status:status,
        haircut_id:haircut.id

      });
      Router.push('/haircuts');
      toast.success('Corte atualizado com sucesso!');

    }catch(err){
      toast.error('Erro ao cadastrar!');
      console.log(err);
    }
  }
  return (
    <>
      <Head>
        <title>Editar Corte - BarberPro</title>
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
            Editar Modelo
          </Text>
          
          <Input 
            type='text'
            size='lg'
            rounded={6}
            placeholder="Nome do Corte"
            mb={5}
            color='button.default'
            disabled={subscriptions?.status !== 'active'}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Input 
            type='text'
            size='lg'
            rounded={6}
            mb={5}
            color='button.default'
            placeholder="Preço exemplo:45.90"
            disabled={subscriptions?.status !== 'active'}
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <Flex alignItems="flex-start" justifyContent="flex-start" w='100%' >
            <Text color='button.default' fontWeight='bold' mr={5} mb={5}>Desativar Corte</Text>
                <Switch 
                disabled={subscriptions?.status !== 'active'}
                  size='lg' 
                  colorScheme='red'
                  value={switchDisabled}
                  onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChangeSwich(e)}
                isChecked={switchDisabled === 'disabled' ? false : true}
                  />
          </Flex>
          <Button 
            w='100%' 
            mb={4} 
            bg= 'button.cta'
            disabled={subscriptions?.status !== 'active'}
            cursor={subscriptions?.status !== 'active'?'not-allowed':'pointer'}
            _hover={{bg:'#ffb13e'}}
            onClick={handleEdit}
            >Salvar
          </Button>
          {subscriptions?.status !== 'active' && (
            <Flex>
              <Link href='/planos' >
                <Text color="#31FB6A" mr={1}>Seja Premium </Text>
              </Link>
              <Text color='#FFF'> e tenha todos acessos liberados.</Text>
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
  const {id} = ctx.params;
  try{
    const apiClient = setupAPIClient(ctx);
    const check = await apiClient.get('/haircut/check')
    const response = await apiClient.get('/haircut/details',{
      params:{
        haircut_id:id,
      }
    })
    console.log(check.data);
    return{
      props:{
        haircut:response.data,
        subscriptions:check.data.subscriptions
      }
    }
    
    
  }catch(err){
    console.log(err);
    return {
      redirect:{
        destination:'/haircuts',
        permanent:false
      }
    }
  }
 
})
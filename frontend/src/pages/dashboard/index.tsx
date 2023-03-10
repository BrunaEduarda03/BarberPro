import { Sidebar } from "@/components/siderbar";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Dashboard(){
  return (
    <>
      <Head>
        <title>BarberPro - Minha Barbearia</title>
      </Head>
      <Sidebar>
        <Text color='#FFF'>Dashboard</Text>
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
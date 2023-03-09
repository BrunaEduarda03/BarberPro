import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";

export default function Dashboard(){
  return (
    <>
      <Head>
        <title>BarberPro - Minha Barbearia</title>
      </Head>
      <div>dashboard</div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
  return{
    props:{

    }
  }
})
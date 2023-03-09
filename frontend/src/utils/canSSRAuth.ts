import { AuthTokenError } from "@/services/errors/AuthTokenError";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";

export function canSSRAuth<P>(fn:GetServerSideProps<P>){
  return async (ctx:GetServerSidePropsContext):Promise<GetServerSidePropsResult<P>> =>{
    const cookies = parseCookies(ctx);
    const token = cookies['@barber.token'];

    if(!token){
      return {
        redirect:{
          destination:'/',
          permanent: false
        }
      }
    }
    try{
      return await fn(ctx);
    }catch(err){
      if(err instanceof AuthTokenError){
        destroyCookie(ctx,'@barber.token',{path:'/'})
      }
      return {
        redirect:{
          destination:'/',
          permanent: false
        }
      }
    }
  }

}
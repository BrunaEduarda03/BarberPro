import { api } from "@/services/apiClient";
import  Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextData {
  user:UserProps;
  isAuthenticated:boolean;
  signIn:(credentials:SigInProps)=>Promise<void>;
  signUp:(credentials:SigUpProps)=>Promise<void>;
  logOut:()=>Promise<void>;
}

interface UserProps {
  id:string;
  name:string;
  email:string;
  endereco: string | null;
  subscriptions:SubscriptionsProps;
}

interface SubscriptionsProps {
  id:string;
  status:string;
}
interface AuthProviderProps{
  children:ReactNode;
}

interface SigInProps{
  email:string;
  password:string;
}

interface SigUpProps{
  name:string;
  email:string;
  password:string;
}

export function signOut(){
  try{
    destroyCookie(undefined,'@barber.token');
    Router.push('/');
  }catch{
    console.log('erro ao deslogar');
    
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user,setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(()=>{
    const {'@barber.token':token} = parseCookies();
    if(token){
      api.get('/details')
        .then(response=>{
          const{id,email,name,endereco,subscriptions} = response.data;
          setUser({id,email,name,endereco,subscriptions});
        })
        .catch(()=>{
          signOut();
        })
    }
  },[])

  async function signIn({email,password}:SigInProps){
    try{
      const response = await api.post('/login',{
        email,
        password
      });
      // console.log(response);
      const {id,name,token,subscriptions,endereco} = response.data;
      setCookie(undefined,'@barber.token',token,{
        maxAge: 60 * 60 * 24 * 30, // 1mes,
        path: '/',
      });
      setUser({id,name,email,subscriptions,endereco});
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      Router.push('/dashboard')
      
    }catch(err){
      console.log('Error ao logar',err);
      
    }
  }

  async function signUp({name,email,password}){
    try{
      const response = await api.post('/users',{
        name,email,password
      });
      Router.push('/');
    }catch(err){
      console.log(err);
      
    }
  }

  async function logOut(){
    try{
      destroyCookie(undefined,'@barber.token',{path:'/'});
      Router.push('/');
      setUser(null);
    }catch(err){
      console.log("ERRO AO SAIR", err);
      
    }
  }
  return(
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      signUp,
      logOut
    
    }}>
      {children}
    </AuthContext.Provider>
  )
}
import { api } from "@/services/apiClient";
import  Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import path from "path";
import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
  user:UserProps;
  isAuthenticated:boolean;
  signIn:(credentials:SigInProps)=>Promise<void>;
  signUp:(credentials:SigUpProps)=>Promise<void>;
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
    destroyCookie(undefined,'@pizzaria.token');
    Router.push('/');
  }catch{
    console.log('erro ao deslogar');
    
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user,setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

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
  return(
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      signUp
    
    }}>
      {children}
    </AuthContext.Provider>
  )
}
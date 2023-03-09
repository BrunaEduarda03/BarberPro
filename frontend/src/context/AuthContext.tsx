import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
  user:UserProps;
  isAuthenticated:boolean;
  signIn:(credentials:SigInProps)=>Promise<void>;
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

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user,setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({email,password}:SigInProps){
    console.log(email);
    console.log(password);
    
    
    
  }

  return(
    <AuthContext.Provider value={{user,isAuthenticated,signIn}}>
      {children}
    </AuthContext.Provider>
  )
}
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ILoginUser } from "../../interface/IUser";
import prismaClient from "../../prisma";

class LoginUserService{
  async execute({email,password}:ILoginUser){
    const user = await prismaClient.user.findFirst({
      where:{
        email:email
      },
      include:{
        subscriptions:true,
      }
    })
    if(!user) throw new Error("Email/Password incorrect");
    
    const passwordMatch = await compare(password, user?.password);
    if(!passwordMatch) throw new Error('Email/Password incorrect');

    const token = sign(
      {
        email: user.email,
        password:user.password,
    },
    process.env.JWT_SECRET,
    {
      subject:user.id,
      expiresIn:'30d'
    }
    )
    
    return {
      id:user?.id,
      name:user?.name,
      email:user?.email,
      endereco:user?.endereco,
      token:token,
      subscriptions:user.subscriptions ? {
        id:user?.subscriptions?.id,
        status:user?.subscriptions?.status
      } : null
    };
  }
}

export {LoginUserService}
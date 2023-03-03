import { hash } from "bcryptjs";
import { IUser } from "../../interface/IUser";
import prismaClient from "../../prisma";


class CreateUserService{
  async createUser({name,email,password}:IUser){

    if(!email) throw new Error('Email Incorrect!')

    const alreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email,
      }
    })
    if(alreadyExists) throw new Error('User/email already exists');

    const passwordHash = await hash(password,8);

    const user = await prismaClient.user.create({
      data:{
        name:name,
        email:email,
        password:passwordHash
      },
      select:{
        id:true,
        name:true,
        email:true,
      }

    })
   
    return user;
  }
}

export {CreateUserService}
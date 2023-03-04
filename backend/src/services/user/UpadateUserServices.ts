import prismaClient from "../../prisma";

class UpdateUserService{
  async execute({user_id,name,endereco}){
    try{
      const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
          id:user_id,
        }
      })
      if(!userAlreadyExists) throw new Error("User dont exists");
      
      const userUpdate = await prismaClient.user.update({
        where:{
          id:user_id,
        },
        data:{
          name,
          endereco,
        },
        select:{
          name:true,
          email:true,
          endereco:true,
        }
      })
      return userUpdate;

    }catch(err){
      console.log(err);
      throw new Error("Error on Update the user");
    }
    
  }
  
}

export {UpdateUserService}
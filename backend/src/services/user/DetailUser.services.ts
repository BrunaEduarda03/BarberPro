import prismaClient from "../../prisma";

class DetailUserService{
  async execute(){
    /*const user = await prismaClient.user.findFirst({
      where:{id:user_id},
    
    select:{
      id:true,
      name:true,
      email:true,
    }
    
    })
    return user;*/
    return {ok:true}
  }
}
export {DetailUserService}
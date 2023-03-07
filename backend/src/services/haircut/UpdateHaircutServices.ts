import prismaClient from "../../prisma"

interface updateHaircut{
  user_id:string;
  name:string;
  price:number;
  status: string | boolean;
  haircut_id:string;
}

class UpdateHaircutService{
  async execute({user_id,name,price,haircut_id,status = true}:updateHaircut){
    const user = await prismaClient.user.findFirst({
      where: {
        id:user_id
      },
      include:{
        subscriptions:true,
      }
    })
    // não assinante
    if(user?.subscriptions?.status !== 'active') {
      throw new Error("Not Authorized");
    }

    const updateHaircut = await prismaClient.haircut.update({
      where:{
        id:haircut_id,
      },
      data:{
        name:name,
        price:price,
        status:status === true ? true : false,
      }
    })
    return updateHaircut;
  }
}

export {UpdateHaircutService}
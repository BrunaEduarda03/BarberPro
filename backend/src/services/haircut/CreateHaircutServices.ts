import prismaClient from "../../prisma";

interface IHaircutRequest{
  user_id:string;
  name:string;
  price:number;
}

class CreateHaircutService{
  async execute({user_id,name,price}:IHaircutRequest){
    if(!name || !price) throw new Error("Error creating");

    // quanatidade de modelos cadastrados
    const myHaircuts = await prismaClient.haircut.count({
      where:{
        user_id:user_id
      }
    })

    const user = await prismaClient.user.findFirst({
      where:{
        id:user_id
      },
      include:{
        subscriptions:true
      }
    })
    //limitar para qtd:3 se n for premium
    if(myHaircuts >= 3 && user?.subscriptions.status !== 'active') {
      throw new Error("Error! Not Authorized");
    }
    
    
    const addHaircut = await prismaClient.haircut.create({
      data:{
        name:name,
        price:price,
        user_id:user_id,
      }
    })
    return addHaircut;
  }
}

export {CreateHaircutService}
import prismaClient from "../../prisma"

interface HaircutRequest{
  user_id: string;
  status: boolean | string;
}

class ListHaircutService{
  async execute({user_id,status}:HaircutRequest){
    const haircuts = await prismaClient.haircut.findMany({
      where:{
        user_id:user_id,
        status:status === 'true' ? true : false
      }
    })
    return haircuts;
  }
}

export {ListHaircutService}

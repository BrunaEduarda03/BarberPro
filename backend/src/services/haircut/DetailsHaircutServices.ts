import prismaClient from "../../prisma";

interface DetailsRequest{
  haircut_id: string;
}

class DetailsHaircutService{
  async execute({haircut_id}:DetailsRequest){
    const details = await prismaClient.haircut.findFirst({
      where:{
        id:haircut_id
      }
    })
    return details;

  }
}

export {DetailsHaircutService};
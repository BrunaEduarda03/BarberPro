import prismaClient from "../../prisma";
interface listSchedule{
  user_id:string;
}

class ListScheduleService{
  async execute({user_id}:listSchedule){
    const listSchedules = await prismaClient.service.findMany({
      where:{
        user_id: user_id
      },
      select:{
        id:true,
        customer:true,
        haircuts:true
      }
    })
    return listSchedules;
  }
}

export {ListScheduleService};
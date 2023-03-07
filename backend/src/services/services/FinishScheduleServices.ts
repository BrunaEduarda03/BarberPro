import prismaClient from "../../prisma";

interface FinishSchedule{
  schedule_id:string;
  user_id:string;
}

class FinishScheduleService{
  async execute({schedule_id,user_id}:FinishSchedule){
    try{
      
        const userSchedule = await prismaClient.service.findFirst({
          where:{
            user_id:user_id,
            id:schedule_id
          }
        })
        if(!userSchedule) throw new Error("Not Authorized");
    
        await prismaClient.service.delete({
          where:{
            id:schedule_id
          }
        })

        return {message:" Deleted Sucessfully"};

      }catch(err) {
      console.log(err);
      throw new Error("Error");   
    }
  }
}

export {FinishScheduleService};
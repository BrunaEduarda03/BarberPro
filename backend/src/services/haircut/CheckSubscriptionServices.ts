import prismaClient from "../../prisma";

interface checkSubscription{
  user_id: string;
}

class CheckSubscriptionService{
  async execute({user_id}:checkSubscription){
    const checkSubs = await prismaClient.user.findFirst({
      where:{
        id: user_id
      },
      select:{
       subscriptions:{
        select:{
          id:true,
          status:true,
        }
       }
      }
    })
    return checkSubs;
  }

}

export {CheckSubscriptionService}
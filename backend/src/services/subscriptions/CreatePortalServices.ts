import Stripe from "stripe";
import prismaClient from "../../prisma";

interface CreatePortalRequest{
  user_id:string;
}

class CreatePortalService{
  async execute({user_id}:CreatePortalRequest){
    const stripe = new Stripe(
      process.env.STRIPE_API_KEY,{
        apiVersion:'2022-11-15',
        appInfo:{
          name:'BarberPro',
          version:'1'
        }
      }
    )
    const findUser = await prismaClient.user.findFirst({
      where:{
        id:user_id,
      }
    });
    let sessionId = findUser.stripe_customer_id;
    if(!sessionId){
      console.log('user not found');
      return {message:'user not found'}
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer:sessionId,
      return_url:process.env.STRIPE_SUCCESS_URL
    })
    return {sessionId:portalSession.url}

  }
}
export {CreatePortalService};
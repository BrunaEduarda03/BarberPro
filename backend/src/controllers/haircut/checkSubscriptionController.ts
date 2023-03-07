import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionServices";

class checkSubscriptionController{
  async checkSubscription(req:Request,res:Response){
    const user_id = req.user_id;
    const checkSubscriptionService = new CheckSubscriptionService();
    const subscription = await checkSubscriptionService.execute({user_id});
    return res.status(200).json(subscription); 
  }
}

export {checkSubscriptionController};
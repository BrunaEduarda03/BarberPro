import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUser.services";

class DetailUserController{
  async details(req:Request,res:Response){
    const user_id = req.user_id;
    console.log(user_id);
    
    const detailUserService = new DetailUserService();
    const details = await detailUserService.execute();
    return res.status(200).json(details);
  }
}

export {DetailUserController}
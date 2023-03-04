import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpadateUserServices";

class UpadateUserController{
  async update(req:Request,res:Response){
    const {name,endereco} = req.body;
    const user_id = req.user_id;
    const updateUserService = new UpdateUserService();
    const updateUser = await updateUserService.execute({name,endereco,user_id});
    return res.status(200).json(updateUser);
  }
  
}

export {UpadateUserController}
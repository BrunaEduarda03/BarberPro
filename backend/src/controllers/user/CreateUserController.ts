
import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserServices";


class CreateUserController{
  async create(req:Request,res:Response){
    const createUserService = new CreateUserService();
    const user = await createUserService.createUser(req.body);
    return res.status(201).json(user);
  }
}

export {CreateUserController}
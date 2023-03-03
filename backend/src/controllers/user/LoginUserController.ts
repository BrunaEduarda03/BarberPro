import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/LoginUserServices";

class LoginUserController{
  async login(req:Request,res:Response){
    const loginUserService = new LoginUserService();
    const login = await loginUserService.execute(req.body);
    return res.status(200).json(login);
  }
}

export {LoginUserController}
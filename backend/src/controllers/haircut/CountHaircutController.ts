import { Request, Response } from "express";
import { CountHaircutService } from "../../services/haircut/CountHaircutServices";

class CountHaircutController{
  async countHaircut(req: Request, res: Response){
    const user_id = req.user_id as string;
    const countHaircutService = new CountHaircutService(); 
    const count = await countHaircutService.execute({user_id});
    return res.status(200).json(count); 
  }
}
export {CountHaircutController};
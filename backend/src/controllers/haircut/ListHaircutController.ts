import { Request, Response } from "express";
import { ListHaircutService } from "../../services/haircut/ListHaircutServices"

class ListHaircutController{
  async list(req:Request,res:Response){
    const status = req.query.status as string;
    const user_id = req.user_id;
    const listHaircutService = new ListHaircutService();
    const list = await listHaircutService.execute({user_id,status});
    return res.status(200).json(list);
  }
}

export {ListHaircutController}
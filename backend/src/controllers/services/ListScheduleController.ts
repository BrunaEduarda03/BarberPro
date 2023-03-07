import { Request, Response } from "express";
import { ListScheduleService } from "../../services/services/ListScheduleServices";

class ListScheduleController{
  async list(req: Request, res: Response){
    const user_id = req.user_id;
    const listScheduleService = new ListScheduleService();
    const list = await listScheduleService.execute({user_id});
    return res.status(200).json(list);
  }
}

export {ListScheduleController};
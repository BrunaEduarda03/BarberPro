import { Request, Response } from "express";
import { FinishScheduleService } from "../../services/services/FinishScheduleServices";

class FinishScheduleController{
  async remove(req: Request, res: Response){
    const user_id = req.user_id;
    const schedule_id = req.query.schedule_id as string;
    const finishScheduleService = new FinishScheduleService(); 
    const removeSchedule = await finishScheduleService.execute({schedule_id,user_id});
    return res.status(200).json(removeSchedule);
  }
}

export {FinishScheduleController};
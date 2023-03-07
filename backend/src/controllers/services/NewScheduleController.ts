import { Request, Response } from "express";
import { NewScheduleService } from "../../services/services/NewScheduleServices";


class NewScheduleController{
  async create(request: Request, response: Response){
    const { haircut_id, customer } = request.body;
    const user_id = request.user_id;

    const newSchedule = new NewScheduleService();

    const schedule = await newSchedule.execute({
      user_id,
      haircut_id,
      customer,
    })

    return response.json(schedule);


  }
}

export { NewScheduleController }
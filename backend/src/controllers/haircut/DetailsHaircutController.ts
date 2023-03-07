import { Request, Response } from "express";
import { DetailsHaircutService } from "../../services/haircut/DetailsHaircutServices";

class DetailsHaircutController{
  async details(req: Request, res: Response){
    const haircut_id = req.query.haircut_id as string;
    const detailsHaircutService = new  DetailsHaircutService();
    const details = await detailsHaircutService.execute({haircut_id});
    return res.status(200).json(details);
  }
}

export {DetailsHaircutController};
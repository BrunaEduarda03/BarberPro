import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutServices";

class UpdateHaircutController{
  async update(req:Request,res:Response){
    const {name,price,status,haircut_id} = req.body;
    const user_id = req.user_id;
    const updateHaircutService = new UpdateHaircutService();
    const update = await updateHaircutService.execute({
      user_id,
      name,
      price,
      status,
      haircut_id
    });
    return res.status(200).json(update);
  }
}

export {UpdateHaircutController};
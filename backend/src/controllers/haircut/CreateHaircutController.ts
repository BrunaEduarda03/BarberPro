import { Request, Response } from "express";
import { CreateHaircutService } from "../../services/haircut/CreateHaircutServices";

 class CreateHaircutController{
  async create(req:Request,res:Response){
    const {name,price} = req.body;
    const user_id = req.user_id;

    const createHaircutService = new CreateHaircutService();
    const addHaircut = await createHaircutService.execute({
      name,
      price,
      user_id
    });
    return res.status(201).json(addHaircut);
  }
 }

 export {CreateHaircutController}
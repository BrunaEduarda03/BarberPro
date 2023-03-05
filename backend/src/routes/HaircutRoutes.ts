import { Router } from "express";
import { CreateHaircutController } from "../controllers/haircut/CreateHaircutController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const haircutRouter = Router();

haircutRouter.post('/haircut',tokenAutentication,new CreateHaircutController().create);

export default haircutRouter;
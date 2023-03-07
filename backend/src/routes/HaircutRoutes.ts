import { Router } from "express";
import { CreateHaircutController } from "../controllers/haircut/CreateHaircutController";
import { ListHaircutController } from "../controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "../controllers/haircut/UpdateHaircutController";
import { UpadateUserController } from "../controllers/user/UpadateUserController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const haircutRouter = Router();

haircutRouter.post('/haircut',tokenAutentication,new CreateHaircutController().create);

haircutRouter.get('/haircuts',tokenAutentication,new ListHaircutController().list);

haircutRouter.put('/haircut',tokenAutentication,new UpdateHaircutController().update);

export default haircutRouter;
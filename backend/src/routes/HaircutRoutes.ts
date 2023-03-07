import { Router } from "express";
import { checkSubscriptionController } from "../controllers/haircut/checkSubscriptionController";
import { CountHaircutController } from "../controllers/haircut/CountHaircutController";
import { CreateHaircutController } from "../controllers/haircut/CreateHaircutController";
import { DetailsHaircutController } from "../controllers/haircut/DetailsHaircutController";
import { ListHaircutController } from "../controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "../controllers/haircut/UpdateHaircutController";
import { UpadateUserController } from "../controllers/user/UpadateUserController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const haircutRouter = Router();

haircutRouter.post('/haircut',tokenAutentication,new CreateHaircutController().create);

haircutRouter.get('/haircuts',tokenAutentication,new ListHaircutController().list);

haircutRouter.put('/haircut',tokenAutentication,new UpdateHaircutController().update);

haircutRouter.get('/haircut/check',tokenAutentication,new checkSubscriptionController().checkSubscription);

haircutRouter.get('/haircut/count',tokenAutentication,new CountHaircutController().countHaircut);

haircutRouter.get('/haircut/details',tokenAutentication,new DetailsHaircutController().details);

export default haircutRouter;
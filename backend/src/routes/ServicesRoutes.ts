import { Router } from "express";
import { NewScheduleController } from "../controllers/services/NewScheduleController";
import { tokenAutentication } from "../middlewares/tokenAutentication";


const servicesRouter = Router();

servicesRouter.post('/schedule',tokenAutentication,new NewScheduleController().create);

export default servicesRouter;
import { Router } from "express";
import { ListScheduleController } from "../controllers/services/ListScheduleController";
import { NewScheduleController } from "../controllers/services/NewScheduleController";
import { tokenAutentication } from "../middlewares/tokenAutentication";


const servicesRouter = Router();

servicesRouter.post('/schedule',tokenAutentication,new NewScheduleController().create);

servicesRouter.get('/schedules',tokenAutentication,new ListScheduleController().list);

export default servicesRouter;
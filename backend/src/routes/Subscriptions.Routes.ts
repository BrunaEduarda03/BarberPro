import { Router } from "express";
import { SubscribeController } from "../controllers/subscriptions/SubscribeController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const subscribeRouter = Router();

subscribeRouter.post('/subscribe',tokenAutentication,new SubscribeController().handle);

export default subscribeRouter;
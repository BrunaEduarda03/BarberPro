import { Router } from "express";
import { SubscribeController } from "../controllers/subscriptions/SubscribeController";
import { WebhooksController } from "../controllers/subscriptions/WebhooksController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const subscribeRouter = Router();

subscribeRouter.post('/subscribe',tokenAutentication,new SubscribeController().handle);

subscribeRouter.post('/webhooks',new WebhooksController().handle);

export default subscribeRouter;
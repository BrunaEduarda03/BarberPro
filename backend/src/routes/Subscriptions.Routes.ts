import { Router } from "express";
import { CreatePortalController } from "../controllers/subscriptions/CreatePortalController";
import { SubscribeController } from "../controllers/subscriptions/SubscribeController";
import { WebhooksController } from "../controllers/subscriptions/WebhooksController";
import { tokenAutentication } from "../middlewares/tokenAutentication";

const subscribeRouter = Router();

subscribeRouter.post('/subscribe',tokenAutentication,new SubscribeController().handle);

subscribeRouter.post('/webhooks',new WebhooksController().handle);

subscribeRouter.post('/create-portal',tokenAutentication,new CreatePortalController().handle);

export default subscribeRouter;
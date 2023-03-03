import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";


const userRouter = Router();

userRouter.post('/users',new CreateUserController().handle);

export default userRouter;
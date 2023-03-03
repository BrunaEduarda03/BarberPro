import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { LoginUserController } from "../controllers/user/LoginUserController";


const userRouter = Router();

userRouter.post('/users',new CreateUserController().create);
userRouter.post('/login',new LoginUserController().login);

export default userRouter;
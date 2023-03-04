import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { DetailUserController } from "../controllers/user/DetailUser.controller";
import { LoginUserController } from "../controllers/user/LoginUserController";
import { tokenAutentication } from "../middlewares/tokenAutentication";


const userRouter = Router();

userRouter.post('/users',new CreateUserController().create);
userRouter.post('/login',new LoginUserController().login);

userRouter.get('/details',tokenAutentication,new DetailUserController().details);

export default userRouter;
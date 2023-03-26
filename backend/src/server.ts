import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import cors from 'cors';
import userRouter from './routes/UserRoutes';
import haircutRouter from './routes/HaircutRoutes';
import servicesRouter from './routes/ServicesRoutes';
import subscribeRouter from './routes/Subscriptions.Routes';


const app = express();

app.use((req,res,next)=>{
  if(req.originalUrl === '/webhooks'){
    next();
  }else{
    express.json()(req,res,next);
  }
});
app.use(cors()); // liberar para quaisquer requisições

app.use(userRouter);
app.use(haircutRouter);
app.use(servicesRouter);
app.use(subscribeRouter);

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
  if(err instanceof Error){
    return res.status(400).json({
      error:err.message
    })
  }
  return res.status(500).json({
    status:'error',
    message:'Internal server error'
  })
})

app.listen(3332,() => console.log('servidor online'));

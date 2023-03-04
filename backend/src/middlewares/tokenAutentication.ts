import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IPayload{
  sub:string;
}

export function tokenAutentication(req:Request,res:Response,next:NextFunction){ 
  const authToken = req.headers.authorization;
  if(!authToken) res.status(401).json('Token not Found');
  const [,token] = authToken.split(' ');
  // console.log(token);
  try{
    const {sub} = verify( //user_id
      token,
      process.env.JWT_SECRET
    ) as IPayload;
    req.user_id = sub; //pasta @types
    return next();
    
  }catch(err){
    console.log(err);
    return res.status(401).end();
  }
  next();
}
import { Request, Response, Router } from "express";


 const router = Router();

  router.get('/test', (req:Request, res:Response) => {
    return res.json({ok:true}).status(200);
  })
  export {router};

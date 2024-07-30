import { Request, Response } from 'express';
import { tryCatch } from '../../middleware/tryCatch';

export const userLogin = tryCatch(async (req: Request, res: Response) => {
  const userData = req.body;




  
});

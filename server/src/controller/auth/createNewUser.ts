import { Request, Response } from 'express';
import { tryCatch } from '../../middleware/tryCatch';

export const createNewUser = tryCatch(async (req: Request, res: Response) => {
  const userData = req.body;

  
});

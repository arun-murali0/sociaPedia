import { Request, Response } from 'express';
import { tryCatch } from '../../middleware/tryCatch';
import { User } from '../../models/user';

export const createNewUser = tryCatch(async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await User.create(userData);

  res.status(200).json({ message: 'User created successfully' });
});

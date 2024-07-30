import { Request, Response } from 'express';
import { tryCatch } from '../../middleware/tryCatch';
import { User } from '../../models/user';

export const userLogin = tryCatch(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email }).exec();
  if (!user) {
    return res.status(200).json({ message: 'user not Found' });
  }
  res.status(200).json({ message: 'Login successfull' });
});

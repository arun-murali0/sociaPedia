import { Request, Response } from 'express';
import { tryCatch } from '../../middleware/tryCatch';
import { User } from '../../models/user';
import { passwordHash } from '../../utils/bcrypt';

export const createNewUser = tryCatch(async (req: Request, res: Response) => {
  let userData = req.body;
  userData.password = passwordHash(userData.password);
  const user = await User.create(userData);
  res.status(200).json({ message: 'User created successfully' });
});

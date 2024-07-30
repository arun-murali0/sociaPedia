import { Request } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../models/user';
import { customError } from '../middleware/ErrorHandler';
import { IUser } from '../utils/types/User.types';

passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req: Request, email: string, password: string, done: any) => {
      try {
        const user = await User.find({ email: email }).exec();
        console.log(user);
        if (!user) {
          throw new customError('user Not Found', 400);
        }
        //   if (user.password !== password) {
        //     throw new customError('password Mismatch', 400);
        //   }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

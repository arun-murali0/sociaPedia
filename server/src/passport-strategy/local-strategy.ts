import { Request } from 'express';
import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../models/user';
import { customError } from '../middleware/ErrorHandler';
import { IID } from '../utils/types/User.types';

passport.serializeUser((user: IID, done: DoneCallback) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: IID, done: DoneCallback) => {
  try {
    const user = await User.findOne({ _id: id }).exec();
    if (!user) {
      throw new customError('UnAuthourized', 401);
    }
    done(user, null);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req: Request, email: string, password: string, done: any) => {
      try {
        const user = await User.findOne({ email: email }).exec();
        if (!user) {
          throw new customError('user Not Found', 400);
        }
        if (user.password !== password) {
          throw new customError('password Mismatch', 400);
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

import mongoose from 'mongoose';

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export { IUser };

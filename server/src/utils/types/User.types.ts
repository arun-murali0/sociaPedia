import mongoose from 'mongoose';

interface IID {
  _id?: mongoose.Types.ObjectId;
}

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date | number;
  updatedAt: Date | number;
}

export { IUser,IID };

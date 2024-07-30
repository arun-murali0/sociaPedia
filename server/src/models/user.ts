import mongoose, { Schema } from 'mongoose';
import { IUser } from '../utils/types/User.types';

const userSchema: Schema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String },
  createdAt: Date,
  updatedAt: Date,
});

export const User = mongoose.model<IUser>('User', userSchema);

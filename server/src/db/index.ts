import mongoose from 'mongoose';
import { MONGO_STRING } from '../config';
import { customError } from '../middleware/ErrorHandler';

export const db = async () => {
  try {
    if (!MONGO_STRING) {
      throw new customError('MongoDB error', 500);
    }
    await mongoose.connect(MONGO_STRING);
  } catch (error: any) {
    throw new customError(error.message, error.statusCode);
    process.exit(1);
  }
};

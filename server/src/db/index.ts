import mongoose from 'mongoose';

export const db = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    process.exit(1);
    
  }
};

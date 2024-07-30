import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3030;
const MONGO_STRING = process.env.MONGO_URL;
const SECRET = process.env.SECRET || undefined;

export { PORT, MONGO_STRING, SECRET };

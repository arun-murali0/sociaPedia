import Express from 'express';
import Routes from './routes/index';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import mongoStore from 'connect-mongo';
import { customError, errorHandlers } from './middleware/ErrorHandler';

import { PORT, SECRET, MONGO_STRING } from './config';
import { db } from './db';
import helmet from 'helmet';

const app = Express();

// middleware
app.use(cors());
app.use(helmet());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SECRET || '',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
    },
    store: mongoStore.create({
      mongoUrl: MONGO_STRING,
    }),
  })
);

// passport config
app.use(passport.initialize());
app.use(passport.session());

app.use('/', Routes);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((error: any) => {
    throw new customError(error.message, error.statusCode);
  });

// error handler
app.use(errorHandlers);

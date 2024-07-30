import Express from 'express';
import Routes from './routes/index';
import { customError, errorHandlers } from './middleware/ErrorHandler';

import { PORT } from './config';
import { db } from './db';

const app = Express();

// middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', Routes);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((error:any) => {
    throw new customError(error.message, error.statusCode);
  });

app.use(errorHandlers);

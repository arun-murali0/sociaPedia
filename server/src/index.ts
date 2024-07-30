import Express from 'express';
import Routes from './routes/index';
import { errorHandlers } from './middleware/ErrorHandler';

import { PORT } from './config';

const app = Express();

// middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});

app.use(errorHandlers);

import { Router } from 'express';

import AuthRoute from "./app-route/index"

const router = Router();

router.use('/api/auth', AuthRoute);

export default router;

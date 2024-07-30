import { Router } from 'express';

import AuthRoute from "./auth-route/index"

const router = Router();

router.use('/api/auth', AuthRoute);

export default router;

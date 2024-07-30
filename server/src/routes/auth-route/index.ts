import { Router } from 'express';
import { createNewUser, userLogin } from '../../controller';
import passport from 'passport';
import '../../passport-strategy/local-strategy';

const router = Router();

// new user creation routes
router.post('/create', createNewUser);

router.post('/login', passport.authenticate('local'), userLogin);

export default router;
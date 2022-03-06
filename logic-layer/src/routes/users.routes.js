import {Router} from 'express'
import {getUserCredentials} from '../controllers/user.controller'
const router = Router();

router.get('/login', getUserCredentials)

export default router;



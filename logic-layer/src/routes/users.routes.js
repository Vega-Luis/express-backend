import {Router} from 'express'
import {checkUserCrendentials, getUserCredentials} from '../controllers/user.controller'
import {showLogin} from '../controllers/user.controller'

const router = Router();

router.get('/login', getUserCredentials)

router.get('/', showLogin)

router.post('/', checkUserCrendentials) 


export default router;



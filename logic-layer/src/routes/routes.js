import {Router} from 'express'
//import {checkUserCrendentials, getUserCredentials, foo, login} from '../controllers/controller'
const controller = require('../controllers/controller')
const router = Router();


router.post('/login', controller.login)

router.post('/consult_by_pattern', controller.consultByPattern)

router.post('/consult_by_amount', controller.consultByAmount)

router.post('/insert', controller.insert)

export default router;



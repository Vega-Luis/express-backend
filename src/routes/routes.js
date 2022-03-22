import {Router} from 'express'
const controller = require('../controllers/controller');
const auth = require('../middleware/auth');
const router = Router();


router.post('/login', controller.login)

router.post('/consult_by_pattern', auth.verifyToken, controller.consultByPattern)

router.post('/consult_by_amount', auth.verifyToken, controller.consultByAmount)

router.post('/insert', auth.verifyToken, controller.insert)

export default router;



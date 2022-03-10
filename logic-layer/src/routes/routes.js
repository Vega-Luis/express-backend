import {Router} from 'express'
//import {checkUserCrendentials, getUserCredentials, foo, login} from '../controllers/controller'
const controller = require('../controllers/controller')
const router = Router();


router.get('/login', controller.showLogin)
router.post('/login', controller.login)

router.get('/consults', controller.getAllArticles)

router.post('/consult_by_pattern', controller.consultByPattern)

router.post('/consult_by_amount', controller.consultByAmount)

router.get('/insert', controller.showInsert)
router.post('/insert', controller.insert)

router.get('*', controller.invalidRoute)

export default router;



import express from 'express'
import config from './config'
import userRoutes from './routes/routes'
const morgan = require('morgan');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/errors');
const validations = require('.//middleware/validations')
const auth = require('./middleware/auth')
//settings
app.set('port', config.port)

//middleware
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//routes

app.use('/login', validations.userCrendentialsValidation)
app.use('/consult_by_amount', validations.consultByAmountValidation)
app.use('/insert', validations.insertValidation)
app.use(userRoutes)
app.use(errorMiddleware.middleware);

export default app
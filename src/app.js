import express from 'express'
import config from './config'
import userRoutes from './routes/routes'

const morgan = require('morgan');
const app = express()
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');

//settings
app.set('port', config.port)
//middlewares
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
const session = require('express-session')
//middleware session
app.use(session({
    secret: 'secreted',
    resave: true,
    saveUninitialized: true

}));
//routes
app.use(userRoutes)

// Static files
app.use(express.static(path.join(__dirname, '../../interface-layer/src/public')))

export default app
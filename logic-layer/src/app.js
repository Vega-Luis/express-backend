import express from 'express'
import config from './config'
import userRoutes from './routes/routes'
const morgan = require('morgan');
const app = express()
const path = require('path')

//settings
app.set('port', config.port)
//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use(userRoutes)

// Static files
app.use(express.static(path.join(__dirname, '../../interface-layer/src/public')))

export default app
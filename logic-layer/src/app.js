import express from 'express'
import config from './config'
import userRoutes from './routes/users.routes'

const app = express()

//settings
app.set('port', config.port)
app.use(userRoutes)
export default app
import express, { urlencoded, json } from 'express'
import morgan from 'morgan'

const app = express()

//settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(urlencoded({ extended: false }))
app.use(json())

//importing routes
import IndexRoutes from './routes/index'
import UserRoutes from './routes/user'
import PublicationRoutes from './routes/publication'

//routes
app.use(IndexRoutes)
app.use('/user', UserRoutes)
app.use('/publication', PublicationRoutes)

export default app

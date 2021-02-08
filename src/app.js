import express, { urlencoded, json } from 'express'
import morgan from 'morgan'

const app = express()


//settings
app.set('port', process.env.PORT || 3000)
app.use(json())
app.use(urlencoded({extended:false}))
app.use(morgan('dev'))

//importing routes
import IndexRoutes from './Routes/index'


//routes
app.use(IndexRoutes)

export default app
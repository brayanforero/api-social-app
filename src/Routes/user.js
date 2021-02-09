import { Router } from 'express'
import { index, store } from '../Controllers/UserController'
const router = Router()

router.get('/', index)

router.post('/', store)

export default router

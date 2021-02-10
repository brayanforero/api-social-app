import { Router } from 'express'
import {
  index,
  store,
  show,
  update,
  destroy,
  auth,
} from '../Controllers/UserController'
const router = Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', store)
router.put('/:id', update)
router.delete('/:id', destroy)

router.post('/auth', auth)

export default router

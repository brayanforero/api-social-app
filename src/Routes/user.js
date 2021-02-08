import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.json({hola: 'mundo from user route'})
})


export default router

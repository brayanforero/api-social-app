import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.json({hola: 'mundo from publication route'})
})

export default router
import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.json({hola: 'mundo'})
})


export default router
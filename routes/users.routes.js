import express from 'express'
const router = express.Router()
import {fetch, remove, update} from '../controller/users.controller.js'

router.get('/',fetch)
router.put('/:id',update)
router.delete('/:id',remove)

export default router

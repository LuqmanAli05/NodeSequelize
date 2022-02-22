import {Router}  from 'express'
import {getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/user.js'

const router = Router()
router.get('/user/all', getAllUsers)
router.get('/user/:id', getUser)
router.post('/user/create',createUser)
router.patch('/user/update/:id', updateUser)
router.delete('/user/delete/:id', deleteUser)

export default router
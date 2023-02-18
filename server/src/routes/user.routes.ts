import { Router } from "express"
import { getUser, getUsers, userCreate, userDelete, userUpdade } from "../controllers/user.controller"

const userRoutes = Router()

userRoutes.post('/', userCreate)
userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.put('/:id', userUpdade)
userRoutes.delete('/:id', userDelete)

export { userRoutes }
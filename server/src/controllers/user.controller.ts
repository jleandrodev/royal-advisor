import { createUser, getAllUsers, getById, updateUser, deleteUser } from "../repositorys/user.repository"
import { Request, Response } from "express"
import { userValidation } from "../validations/user.validation"
import bcrypt from 'bcrypt'

export const userCreate = async ( request : Request, response: Response ) => {
  try {
    await userValidation.validate(request.body)
    const hashPassword = await bcrypt.hash(request.body.password, 10)
    request.body.password = hashPassword
    const user = await createUser(request.body)
    response.status(200).send(user)
  } catch (e) {
    response.status(404).send(e)
  }
}

export const getUsers = async (request : Request, response : Response) => {
  try {
    const users = await getAllUsers()
    response.status(200).json(users)
  } catch (e) {
    response.status(400).send(e)
  }
}

export const getUser = async (request : Request, response : Response) => {
  try {
    const user = await getById(request.params.id)
    response.status(200).send(user)
  } catch (e) {
    response.status(400).send(e)
  }
}

export const userUpdade = async (request : Request, response : Response) => {
  try {
    const user = await updateUser(request.params.id, request.body)
    response.status(200).send(user)
  } catch (e) {
    response.status(400).send(e)
  }
}

export const userDelete = async (request : Request, response : Response) => {
  try {
    await deleteUser(request.params.id)
    response.status(200).send({ message: `User deleted!` })
  } catch (e) {
    response.status(404).send(e)
  }
}
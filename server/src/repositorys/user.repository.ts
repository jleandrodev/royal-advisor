import { prisma } from "../services/prisma"

interface User {
  email: string  
  name: string    
  phone: string     
  password: string
}

export const createUser = async (data : User) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      password: false,
      created_at: true,
      updated_at: true
    }
  })
  return user
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      password: false,
      created_at: true,
      updated_at: true
    }
  })
  return users
}

export const getById = async (id : string) => {
  const user = await prisma.user.findUnique({ 
    where: {id},
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      password: false,
      created_at: true,
      updated_at: true
    }
  })
  return user
}

export const updateUser = async (id : string, data : User) => {
  const user = await prisma.user.update({
    where: {id},
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      password: false,
      created_at: true,
      updated_at: true
    }
  })
  return user
}

export const deleteUser = async (id : string) => {
  await prisma.user.delete({ where : {id} })
  return
}
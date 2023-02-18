import { Request, Response } from 'express'
import { createEvent, showEvent, showAllEvents, updateEvent, deleteEvent } from '../repositorys/event.repository'
import { prisma } from '../services/prisma'

export const eventCreate = async (request: Request, response : Response) => {
  try {
    const isAlreadyExists = await prisma.event.findFirst({ where: { title: request.body.title } })

    if(isAlreadyExists) {
      return response.status(400).send({ message: 'Event is already exists!' })
    }
      const event = await createEvent(request.body)
      response.status(200).send(event)
    } catch (e) {
      response.status(400).send(e)
  }
}

export const eventShow = async (request : Request, response : Response) => {
  try {
    const event = await showEvent(request.params.id)
    response.status(200).send(event)
    
  } catch (e) {
    response.status(400).send(e)
  }
}

export const eventsShowAll = async (request : Request, response : Response) => {
  try {
    const events = await showAllEvents()
    response.status(200).send(events)
  } catch (e) {
    
  }
}

export const eventUpdate = async (request : Request, response : Response) => {
  try {
    const event = await updateEvent(request.params.id, request.body)
    response.status(200).send(event)
  } catch (e) {
    response.status(404).send(e)
  }
}

export const eventRemove = async (request : Request, response : Response) => {
  try {
    await deleteEvent(request.params.id)
    response.status(200).send({ message: "Event deleted!" })
  } catch (e) {
    response.status(400).send(e)
  }
}
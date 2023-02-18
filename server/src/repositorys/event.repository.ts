import { AppError } from "../errors/AppError"
import { prisma } from "../services/prisma"

interface Event {
  title: string
  event_date: Date
}

export const createEvent = async (data : Event) => {
  const event = await prisma.event.create({
    data,
    select: {
      id: true,
      title: true,
      event_date: true,
      team: true
    }
  })
  return event
}

export const showEvent = async (id : string) => {
  const event = await prisma.event.findUnique({ 
    where: { id },
    select: {
      id: true,
      title: true,
      event_date: true,
      team: {
        select: {
          userId: true,
          eventId: false
        }
      },
      created_at: true,
      updated_at: true,
    }
  })
  return event
}

export const showAllEvents = async () => {
  const events = await prisma.event.findMany({
    select: {
      id: true,
      title: true,
      event_date: true,
      team: {
        select: {
          userId: true,
          eventId: false
        }
      },
      created_at: true,
      updated_at: true,
    }
  })

  return events
}

export const updateEvent = async (id: string, data : Event) => {
  const event = await prisma.event.update({ 
    where: {id},
    data,
    select: {
      id: true,
      title: true,
      event_date: true,
      team: true,
      created_at: true,
      updated_at: true
    }
  })
  return event
}

export const deleteEvent = async (id : string) => {
  const eventExists = await prisma.event.findFirst({ where: { id } })
    if(!eventExists){
      throw new AppError('User not exists!')
    }
  await prisma.event.delete({
    where: { id }
  })
  return
}

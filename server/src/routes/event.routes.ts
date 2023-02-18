import { Router } from "express";
import { eventCreate, eventRemove, eventShow, eventsShowAll, eventUpdate } from "../controllers/event.controller";

const eventRoutes = Router()

eventRoutes.post('/', eventCreate)
eventRoutes.get('/:id', eventShow)
eventRoutes.get('/', eventsShowAll)
eventRoutes.put('/:id', eventUpdate)
eventRoutes.delete('/:id', eventRemove)

export { eventRoutes }
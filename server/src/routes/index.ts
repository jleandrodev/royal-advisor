import { Router } from "express";
import { eventRoutes } from "./event.routes";
import { teamRoutes } from "./team.routes";
import { userRoutes } from "./user.routes";

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/events', eventRoutes)
routes.use('/team', teamRoutes)

export { routes }
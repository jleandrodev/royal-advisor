import { Router } from "express";
import { addToTeam } from "../controllers/team.controller";

const teamRoutes = Router()

teamRoutes.post('/', addToTeam)

export { teamRoutes }
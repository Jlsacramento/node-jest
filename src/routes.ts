import { Router } from "express";
import { UserController } from "./constrollers/UserController";

const routes = Router();
const userController = new UserController()

routes.get('/users', userController.index)

routes.post('/users', userController.create)

export {routes}
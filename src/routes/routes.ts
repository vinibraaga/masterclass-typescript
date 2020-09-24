import { Router } from 'express';
import UsersController from '../controllers/ControllerUsers'
import UsersControllers from '../controllers/UsersControllers'

const routes = Router();
const userControllers = new UsersControllers();

// routes.get('/', userControllers.getUsers);
routes.get('/', UsersController.index);
routes.post('/users/email', UsersController.create);


export default routes;
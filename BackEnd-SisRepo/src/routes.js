import { Router } from "express";

import UserController from './app/controllers/Usercontroller';
import SessionControler from './app/controllers/SessionControllers';
import MachineControler from './app/controllers/MachineControllers';
import DashboardController from './app/controllers/DashboardControllers';

const AuthMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/sessions', SessionControler.store);

routes.use(AuthMiddleware);

routes.post('/machines', upload.single('thumbnail'), MachineControler.store);
routes.get('/machines', MachineControler.index);
routes.put('/machines/:machine_id', upload.single('thumbnail'), MachineControler.update);
routes.delete('/machines/:machine_id', MachineControler.destroy);
routes.get('/machines/user/:user_id', MachineControler.getMachinesByUser);
routes.get('/machines/:machine_id', MachineControler.getMachineByID);

routes.get('/dashboard', DashboardController.show);

export default routes;
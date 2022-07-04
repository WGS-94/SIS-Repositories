import { Router } from "express";

import UserController from './app/controllers/Usercontroller';
import SessionControler from './app/controllers/SessionControllers';
import RepoConctroller from './app/controllers/RepoController';

const AuthMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/sessions', SessionControler.store);
routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.get('/users/:id', UserController.update);

routes.use(AuthMiddleware);

routes.get('/users/:user_id/repositories', RepoConctroller.index);
routes.post('/users/:user_id/repositories', RepoConctroller.create);
routes.delete('/users/:user_id/repositories', RepoConctroller.destroy);

export default routes;
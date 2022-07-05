import { Router } from "express";

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionControllers';
import RepoConctroller from './app/controllers/RepoController';

const AuthMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);

routes.use(AuthMiddleware);

routes.get('/users/:user_id/repositories', RepoConctroller.index);
routes.post('/users/:user_id/repositories', RepoConctroller.store);
routes.delete('/users/:user_id/repositories/:repository_id', RepoConctroller.destroy);

export default routes;
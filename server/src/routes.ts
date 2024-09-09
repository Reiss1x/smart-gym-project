import {Router} from 'express';
import {UserController} from './controllers/UserController'
import { authMiddleware } from './middleware/authMiddleware';

const routes = Router()

routes.post('/register', new UserController().create);
routes.post('/login', new UserController().get);
routes.get('/user', new UserController().getAll);
routes.delete('/user/:userId', new UserController().delete);
routes.get('/authenticate', new UserController().verifyJwt);
routes.get('/profile', authMiddleware, new UserController().getProfile)
export default routes



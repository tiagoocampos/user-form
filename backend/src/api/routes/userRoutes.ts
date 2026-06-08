import { Request, Response, Router } from 'express';
import { CreateUserController, ListUserController, UpdateUserController, DeleteUserController } from '../controllers/userController.js';
import { validateSchema } from '../../middlewares/validateSchema.js';
import { createUserSchema } from '../../schemas/userSchemas.js';

const router = Router();

router.post('/users', validateSchema(createUserSchema), new CreateUserController().handle);
router.get('/users', new ListUserController().handle);
router.delete('/users/:id', new DeleteUserController().handle);
router.put('/users/:id', new UpdateUserController().handle);

export { router };
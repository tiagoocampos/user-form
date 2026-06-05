import { Request, Response, Router } from 'express';
import { CreateUserController } from '../controllers/userController.js';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.get('/users', (req: Request, res: Response) => {
    res.send('Listagem de usuários');
});

export { router };
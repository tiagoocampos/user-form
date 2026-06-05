import { Request, Response } from 'express';
import { CreateUserService } from "../../services/userService.js"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email});
        return res.json(user);
    }
}
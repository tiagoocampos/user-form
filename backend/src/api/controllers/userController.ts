import { Request, Response } from 'express';
import { CreateUserService, ListUserService } from "../../services/userService.js"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email});
        return res.json(user);
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

export class ListUserController {
    async handle(req: Request, res: Response) {
        try {
            const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return res.json(users);
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor" });
            
        }
    }
}


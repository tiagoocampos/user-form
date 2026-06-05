import prismaClient from "../prisma/index.js";
import { Request, Response } from "express";

interface User {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({name, email}: User) {
        const user = await prismaClient.user.create({
            data: {
                name,
                email
            }
        });
        console.log(user)
        return user;
    }
}

export { CreateUserService }
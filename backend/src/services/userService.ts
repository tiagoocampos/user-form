import prismaClient from "../prisma/index.js";

interface User {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({name, email}: User) {

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuário já cadastrado");
        }

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

class ListUserService {
    async execute() {
        const users = await prismaClient.user.findMany();
        return users;
    }
}

export { CreateUserService, ListUserService };
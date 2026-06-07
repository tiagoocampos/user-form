
import userRepository from "../repositories/userRepository.js";
import { UserAlreadyExists } from "../exceptions/userAlreadyExists.js";

interface User {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({name, email}: User) {

        const userAlreadyExists = await userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new UserAlreadyExists();
        }

        
        return userRepository.create({name, email});
    }
}

class UpdateUserService {
    async execute(id: string, {name, email}: User) {
        return await userRepository.update(id, {name, email});
    }
}

class DeleteUserService {
    async execute(id: string) {
        return await userRepository.delete(id);
    }
}

class ListUserService {
    async execute() {

        

        const users = await userRepository.findAll();

        if(users.length === 0) {
            throw new Error("Nenhum usuário cadastrado");
        }
        return users;
    }
}

export { CreateUserService, ListUserService, UpdateUserService, DeleteUserService };
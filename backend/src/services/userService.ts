
import userRepository from "../repositories/userRepository.js";

interface User {
    name: string;
    email: string;
}

class CreateUserService {
    async execute({name, email}: User) {

        const userAlreadyExists = await userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Usuário já cadastrado");
        }

        
        
        return userRepository.create({name, email});
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

export { CreateUserService, ListUserService };
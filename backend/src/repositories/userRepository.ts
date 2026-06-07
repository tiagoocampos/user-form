import prismaClient from "../prisma/index.js";

interface CreateUserData {
    name: string,
    email: string
}

class UserRepository {
    async create({name, email}: CreateUserData){
        return await prismaClient.user.create({
            data: {
                name,
                email
            }
        })
    }

    async update(id: string, {name, email}: CreateUserData){
        return await prismaClient.user.update({
            where: {
                id
            },
            data: {
                name,
                email
            }
        })
    }

    async delete(id: string){
        return await prismaClient.user.delete({
            where: {
                id
            }
        })
    }

    async findByEmail(email: string){
        return await prismaClient.user.findFirst({
            where: {
                email
            }
        })
    }

    async findAll(){
        return await prismaClient.user.findMany();
    }
}

export default new UserRepository();
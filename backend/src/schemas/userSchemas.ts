import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string({ message: "O nome é obrigatorio"}).min(3, { message: "O nome precisa ter pelo menos 3 caracteres" }),
    email: z.email({ message: "O email é obrigatorio" })
});
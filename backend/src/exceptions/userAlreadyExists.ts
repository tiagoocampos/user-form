


export class UserAlreadyExists extends Error {
    public statusCode: number;
    constructor() {
        super("User already exists");
        this.name = "userAlreadyExists";
        this.statusCode = 400;
        Object.setPrototypeOf(this, UserAlreadyExists.prototype);
    }
}

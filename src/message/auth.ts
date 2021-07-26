import {Message} from "./message";
import {assertNotEmpty} from "../api/assertions";

export interface SignUp extends Message {
    __type__: "sign-up"
    username: string
    email: string
    password1: string
    password2: string
}

export class SignUpValidator {
    public static isInstance(object: any): object is SignUp {
        return object["__type__"] === "sign-up";
    }

    public validate(message: SignUp): Promise<SignUp> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "username"))
            .then(e => assertNotEmpty(e, "email"))
            .then(e => assertNotEmpty(e, "password1"))
            .then(e => assertNotEmpty(e, "password2"))
    }
}
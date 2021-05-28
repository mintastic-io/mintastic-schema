import {Message} from "../message";

export interface CreateAccount extends Message {
    __type__: "account/create-account"
}

export class CreateAccountValidator {
    public static isInstance(object: any): object is CreateAccount {
        return object["__type__"] === "account/create-account";
    }

    public validate(message: CreateAccount): Promise<CreateAccount> {
        return Promise.resolve(message)
    }
}
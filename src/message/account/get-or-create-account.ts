import {Message} from "../message";

export interface GetOrCreateAccount extends Message {
    __type__: "account/get-or-create-account";
}

export class GetOrCreateAccountValidator {
    public static isInstance(object: any): object is GetOrCreateAccount {
        return object["__type__"] === "account/get-or-create-account";
    }

    public validate(message: GetOrCreateAccount): Promise<GetOrCreateAccount> {
        return Promise.resolve(message)
    }
}
import {Message} from "../message";

export interface GetAccount extends Message {
    __type__: "account/get-account";
}

export class GetAccountValidator {
    public static isInstance(object: any): object is GetAccount {
        return object["__type__"] === "account/get-account";
    }

    public validate(message: GetAccount): Promise<GetAccount> {
        return Promise.resolve(message)
    }
}
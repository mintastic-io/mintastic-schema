import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface WriteUser extends Message {
    __type__: "WriteUser"
    user: User
}

export class WriteUserValidator {
    public static isInstance(object: any): object is WriteUser {
        return object["__type__"] === "WriteUser";
    }

    public validate(message: WriteUser): Promise<WriteUser> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "user.username"))
            .then(e => assertNotEmpty(e, "user.email"))
    }
}

export interface User {
    firstname?: string
    lastname?: string
    username: string
    email: string
}

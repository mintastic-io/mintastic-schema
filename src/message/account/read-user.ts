import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface ReadUser extends Message {
    __type__: "ReadUser"
    userId: string
}

export class ReadUserValidator {
    public static isInstance(object: any): object is ReadUser {
        return object["__type__"] === "ReadUser";
    }

    public validate(message: ReadUser): Promise<ReadUser> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "userId"))
    }
}
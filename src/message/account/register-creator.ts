import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface RegisterCreator extends Message {
    __type__: "account/register-creator"
    name: string,
    social?: {
        facebook: string,
        instagram: string,
        twitter: string,
        youtube: string
        tiktok: string
    },
    website: string
    status: string
}

export class RegisterCreatorValidator {
    public static isInstance(object: any): object is RegisterCreator {
        return object["__type__"] === "account/register-creator";
    }

    public validate(message: RegisterCreator): Promise<RegisterCreator> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "name"))
            .then(e => assertNotEmpty(e, "website"))
            .then(e => assertNotEmpty(e, "status"))
    }
}
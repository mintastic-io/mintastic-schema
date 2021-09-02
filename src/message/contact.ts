import {Message} from "./message";
import {assertNotEmpty} from "../api/assertions";

export interface Contact extends Message {
    __type__: "contact"
    email: string
    name: string
    phone?: string
    message: string
}

export class ContactValidator {
    public static isInstance(object: any): object is Contact {
        return object["__type__"] === "contact";
    }

    public validate(message: Contact): Promise<Contact> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "email"))
            .then(e => assertNotEmpty(e, "name"))
            .then(e => assertNotEmpty(e, "message"))
    }
}
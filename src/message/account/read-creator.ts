import {Message} from "../message";
import {assertNotEmpty} from "../../api/assertions";

export interface ReadCreator extends Message {
    __type__: "account/read-creator"
    creatorId: string
}

export class ReadCreatorValidator {
    public static isInstance(object: any): object is ReadCreator {
        return object["__type__"] === "account/read-creator";
    }

    public validate(message: ReadCreator): Promise<ReadCreator> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "creatorId"))
    }
}
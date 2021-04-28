import {Message} from "../message";
import {assertNotNegative} from "../../api/assertions";

export interface SetBlockLimit extends Message {
    __type__: "market/set-block-limit"
    blockLimit: number
}

export class SetBlockLimitValidator {
    public static isInstance(object: any): object is SetBlockLimit {
        return object["__type__"] === "market/set-block-limit";
    }

    public validate(message: SetBlockLimit): Promise<SetBlockLimit> {
        return Promise.resolve(message)
            .then(e => assertNotNegative(e, "blockLimit"))
    }
}
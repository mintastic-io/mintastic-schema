import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface LockOffering extends Message {
    __type__: "market/lock-offering"
    owner: string
    assetId: string
    amount: number
}

export class LockOfferingValidator {
    public static isInstance(object: any): object is LockOffering {
        return object["__type__"] === "market/lock-offering";
    }

    public validate(message: LockOffering): Promise<LockOffering> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
    }
}

import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface UnlockOffering extends Message {
    __type__: "market/unlock-offering"
    owner: string
    assetId: string
    amount: number
}

export class UnlockOfferingValidator {
    public static isInstance(object: any): object is UnlockOffering {
        return object["__type__"] === "market/lock-offering";
    }

    public validate(message: UnlockOffering): Promise<UnlockOffering> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
    }
}

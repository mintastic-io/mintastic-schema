import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface AbortBid extends Message {
    __type__: "market/abort-bid"
    owner: string
    assetId: string
    bidId: number
}

export class AbortBidValidator {
    public static isInstance(object: any): object is AbortBid {
        return object["__type__"] === "market/abort-bid";
    }

    public validate(message: AbortBid): Promise<AbortBid> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }
}

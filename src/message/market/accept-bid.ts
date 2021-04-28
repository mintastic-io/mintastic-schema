import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface AcceptBid extends Message {
    __type__: "market/accept-bid"
    owner: string
    assetId: string
    bidId: number
}

export class AcceptBidValidator {
    public static isInstance(object: any): object is AcceptBid {
        return object["__type__"] === "market/accept-bid";
    }

    public validate(message: AcceptBid): Promise<AcceptBid> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }
}

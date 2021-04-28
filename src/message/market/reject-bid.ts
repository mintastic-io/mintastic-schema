import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface RejectBid extends Message {
    __type__: "market/reject-bid"
    owner: string
    assetId: string
    bidId: number
}

export class RejectBidValidator {
    public static isInstance(object: any): object is RejectBid {
        return object["__type__"] === "market/reject-bid";
    }

    public validate(message: RejectBid): Promise<RejectBid> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }
}
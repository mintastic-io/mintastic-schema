import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {AbstractMessage, Message} from "../message";

export interface AbortBid extends Message {
    type: "market/abort-bid"
    owner: string
    assetId: string
    bidId: number
}

export class AbortBidImpl extends AbstractMessage implements AbortBid {
    readonly type = "market/abort-bid"
    readonly owner: string
    readonly assetId: string
    readonly bidId: number

    constructor(message: AbortBid) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.bidId = message.bidId
    }

    public static isInstance(object: any): object is AbortBid {
        return object["type"] === "market/abort-bid";
    }

    public validate(): Promise<AbortBid> {
        return Promise.resolve(this as AbortBid)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }
}

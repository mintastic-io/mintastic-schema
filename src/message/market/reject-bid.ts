import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {AbstractMessage, Message} from "../message";

export interface RejectBid extends Message {
    type: "market/reject-bid"
    owner: string
    assetId: string
    bidId: number
}

export class RejectBidImpl extends AbstractMessage implements RejectBid {
    readonly type = "market/reject-bid"
    readonly owner: string
    readonly assetId: string
    readonly bidId: number

    constructor(message: RejectBid) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.bidId = message.bidId
    }

    public static isInstance(object: any): object is RejectBid {
        return object["type"] === "market/reject-bid";
    }

    public validate(): Promise<RejectBid> {
        return Promise.resolve(this as RejectBid)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }
}
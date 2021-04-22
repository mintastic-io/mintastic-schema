import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {AbstractMessage, Message} from "../message";

export interface AcceptBid extends Message {
    type: "market/accept-bid"
    owner: string
    assetId: string
    bidId: number
}

export class AcceptBidImpl extends AbstractMessage implements AcceptBid {
    readonly type = "market/accept-bid"
    readonly owner: string
    readonly assetId: string
    readonly bidId: number

    constructor(message: AcceptBid) {
        super(message);
        this.owner = message.owner
        this.assetId = message.assetId
        this.bidId = message.bidId
    }

    public static isInstance(object: any): object is AcceptBid {
        return object["type"] === "market/accept-bid";
    }

    public validate(): Promise<AcceptBid> {
        return Promise.resolve(this as AcceptBid)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "bidId"))
    }

    public toServer(sub: string): Promise<Message> {
        return Promise.resolve(this);
    }
}

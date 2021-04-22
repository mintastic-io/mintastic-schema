import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BidWithFlow extends Message {
    type: "market/bid-with-flow"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BidWithFlowImpl extends AbstractMessage implements BidWithFlow {
    readonly type = "market/bid-with-flow"
    readonly owner: string
    readonly buyer: string
    readonly assetId: string
    readonly price: string
    readonly amount: number

    constructor(message: BidWithFlow) {
        super(message);
        this.owner = message.owner
        this.buyer = message.buyer
        this.assetId = message.assetId
        this.price = message.price
        this.amount = message.amount
    }

    public static isInstance(object: any): object is BidWithFlow {
        return object["type"] === "market/bid-with-flow";
    }

    public validate(): Promise<BidWithFlowImpl> {
        return Promise.resolve(this as BidWithFlowImpl)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }

    public toServer(sub: string): Promise<Message> {
        return Promise.resolve(this);
    }
}
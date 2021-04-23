import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BidWithFiat extends Message {
    type: "market/bid-with-fiat"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BidWithFiatImpl extends AbstractMessage implements BidWithFiat {
    readonly type = "market/bid-with-fiat"
    readonly owner: string
    readonly buyer: string
    readonly assetId: string
    readonly price: string
    readonly amount: number

    constructor(message: BidWithFiat) {
        super(message);
        this.owner = message.owner
        this.buyer = message.buyer
        this.assetId = message.assetId
        this.price = message.price
        this.amount = message.amount
    }

    public static isInstance(object: any): object is BidWithFiat {
        return object["type"] === "market/bid-with-fiat";
    }

    public validate(): Promise<BidWithFiat> {
        return Promise.resolve(this as BidWithFiat)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}

import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BuyWithFiat extends Message {
    type: "market/buy-with-fiat"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BuyWithFiatImpl extends AbstractMessage implements BuyWithFiat {
    readonly type = "market/buy-with-fiat"
    readonly owner: string
    readonly buyer: string
    readonly assetId: string
    readonly price: string
    readonly amount: number

    constructor(message: BuyWithFiat) {
        super(message);
        this.owner = message.owner
        this.buyer = message.buyer
        this.assetId = message.assetId
        this.price = message.price
        this.amount = message.amount
    }

    public static isInstance(object: any): object is BuyWithFiat {
        return object["type"] === "market/buy-with-fiat";
    }

    public validate(): Promise<BuyWithFiatImpl> {
        return Promise.resolve(this as BuyWithFiatImpl)
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
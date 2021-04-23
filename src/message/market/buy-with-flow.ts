import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BuyWithFlow extends Message {
    type: "market/buy-with-flow"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BuyWithFlowImpl extends AbstractMessage implements BuyWithFlow {
    readonly type = "market/buy-with-flow"
    readonly owner: string
    readonly buyer: string
    readonly assetId: string
    readonly price: string
    readonly amount: number

    constructor(message: BuyWithFlow) {
        super(message);
        this.owner = message.owner
        this.buyer = message.buyer
        this.assetId = message.assetId
        this.price = message.price
        this.amount = message.amount
    }

    public static isInstance(object: any): object is BuyWithFlow {
        return object["type"] === "market/buy-with-flow";
    }

    public validate(): Promise<BuyWithFlow> {
        return Promise.resolve(this as BuyWithFlow)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}
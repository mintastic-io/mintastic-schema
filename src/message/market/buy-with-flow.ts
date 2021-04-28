import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BuyWithFlow extends Message {
    __type__: "market/buy-with-flow"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BuyWithFlowValidator {
    public static isInstance(object: any): object is BuyWithFlow {
        return object["__type__"] === "market/buy-with-flow";
    }

    public validate(message: BuyWithFlow): Promise<BuyWithFlow> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}
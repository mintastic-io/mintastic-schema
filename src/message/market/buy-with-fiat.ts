import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BuyWithFiat extends Message {
    __type__: "market/buy-with-fiat"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
    unlock: boolean
}

export class BuyWithFiatValidator {
    public static isInstance(object: any): object is BuyWithFiat {
        return object["__type__"] === "market/buy-with-fiat";
    }

    public validate(message: BuyWithFiat): Promise<BuyWithFiat> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}
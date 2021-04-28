import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BidWithFiat extends Message {
    __type__: "market/bid-with-fiat"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BidWithFiatValidator {
    public static isInstance(object: any): object is BidWithFiat {
        return object["__type__"] === "market/bid-with-fiat";
    }

    public validate(message: BidWithFiat): Promise<BidWithFiat> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}

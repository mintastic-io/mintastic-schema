import {Message} from "../message";
import {assertNotEmpty, assertNotEquals, assertNotNegative, assertNumeric} from "../../api/assertions";

export interface BidWithFlow extends Message {
    __type__: "market/bid-with-flow"
    owner: string
    buyer: string
    assetId: string
    price: string
    amount: number
}

export class BidWithFlowValidator {
    public static isInstance(object: any): object is BidWithFlow {
        return object["__type__"] === "market/bid-with-flow";
    }

    public validate(message: BidWithFlow): Promise<BidWithFlow> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "buyer"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNumeric(e, "price"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEquals(e, "amount", 0))
    }
}
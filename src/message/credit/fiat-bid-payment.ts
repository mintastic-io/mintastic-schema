import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface FiatBidPayment extends Message {
    __type__: "credit/fiat-bid-payment"
    owner: string
    assetId: string
    amount: number
    recipient: string
}

export class FiatBidPaymentValidator {
    public static isInstance(object: any): object is FiatBidPayment {
        return object["__type__"] === "credit/fiat-bid-payment";
    }

    public validate(message: FiatBidPayment): Promise<FiatBidPayment> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEmpty(e, "recipient"))
    }
}

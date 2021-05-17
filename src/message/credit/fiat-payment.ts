import {assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Message} from "../message";

export interface FiatPayment extends Message {
    __type__: "credit/fiat-payment"
    owner: string
    assetId: string
    amount: number
    recipient: string
}

export class FiatPaymentValidator {
    public static isInstance(object: any): object is FiatPayment {
        return object["__type__"] === "credit/fiat-payment";
    }

    public validate(message: FiatPayment): Promise<FiatPayment> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "owner"))
            .then(e => assertNotEmpty(e, "assetId"))
            .then(e => assertNotNegative(e, "amount"))
            .then(e => assertNotEmpty(e, "recipient"))
    }
}

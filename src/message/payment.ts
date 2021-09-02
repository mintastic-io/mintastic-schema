import {Message} from "./message";
import {assertNotEmpty} from "../api/assertions";

export interface InitiatePayment extends Message {
    __type__: "payment/initiate"
    assetId: string
}

export class InitiatePaymentValidator {
    public static isInstance(object: any): object is InitiatePayment {
        return object["__type__"] === "payment/initiate";
    }

    public validate(message: InitiatePayment): Promise<InitiatePayment> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "assetId"))
    }
}

export interface CompletePayment extends Message {
    __type__: "payment/complete"
    orderId: string
}

export class CompletePaymentValidator {
    public static isInstance(object: any): object is CompletePayment {
        return object["__type__"] === "payment/complete";
    }

    public validate(message: CompletePayment): Promise<CompletePayment> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "orderId"))
    }
}
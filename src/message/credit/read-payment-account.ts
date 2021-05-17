import {Message} from "../message";

export interface ReadPaymentAccount extends Message {
    __type__: "credit/read-payment-account"
}

export class ReadPaymentAccountValidator {
    public static isInstance(object: any): object is ReadPaymentAccount {
        return object["__type__"] === "credit/read-payment-account";
    }

    public validate(message: ReadPaymentAccount): Promise<ReadPaymentAccount> {
        return Promise.resolve(message)
    }
}

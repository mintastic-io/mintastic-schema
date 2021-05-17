import {Message} from "../message";

export interface CreatePaymentAccount extends Message {
    __type__: "credit/create-payment-account"
}

export class CreatePaymentAccountValidator {
    public static isInstance(object: any): object is CreatePaymentAccount {
        return object["__type__"] === "credit/create-payment-account";
    }

    public validate(message: CreatePaymentAccount): Promise<CreatePaymentAccount> {
        return Promise.resolve(message)
    }
}

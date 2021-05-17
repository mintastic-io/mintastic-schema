import {Message} from "../message";

export interface LinkPaymentAccount extends Message {
    __type__: "credit/link-payment-account"
}

export class LinkPaymentAccountValidator {
    public static isInstance(object: any): object is LinkPaymentAccount {
        return object["__type__"] === "credit/link-payment-account";
    }

    public validate(message: LinkPaymentAccount): Promise<LinkPaymentAccount> {
        return Promise.resolve(message)
    }
}

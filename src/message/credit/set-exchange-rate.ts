import {assertNotEmpty, assertNumeric} from "../../api/assertions";
import {AbstractMessage, Message} from "../message";
import {Currency} from "../../api/types";

export interface SetExchangeRate extends Message {
    type: "credit/set-exchange-rate"
    currency: Currency
    exchangeRate: string
}

export class SetExchangeRateImpl extends AbstractMessage implements SetExchangeRate {
    readonly type = "credit/set-exchange-rate"
    readonly currency: Currency
    readonly exchangeRate: string

    constructor(message: SetExchangeRate) {
        super(message);
        this.currency = message.currency;
        this.exchangeRate = message.exchangeRate;
    }

    public static isInstance(object: any): object is SetExchangeRate {
        return object["type"] === "credit/set-exchange-rate";
    }

    public validate(): Promise<SetExchangeRate> {
        return Promise.resolve(this as SetExchangeRate)
            .then(e => assertNotEmpty(e, "currency"))
            .then(e => assertNumeric(e, "exchangeRate"))
    }
}

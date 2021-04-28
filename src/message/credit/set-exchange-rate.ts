import {assertNotEmpty, assertNumeric} from "../../api/assertions";
import {Message} from "../message";
import {Currency} from "../../api/types";

export interface SetExchangeRate extends Message {
    __type__: "credit/set-exchange-rate"
    currency: Currency
    exchangeRate: string
}

export class SetExchangeRateValidator {
    public static isInstance(object: any): object is SetExchangeRate {
        return object["__type__"] === "credit/set-exchange-rate";
    }

    public validate(message: SetExchangeRate): Promise<SetExchangeRate> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "currency"))
            .then(e => assertNumeric(e, "exchangeRate"))
    }
}
